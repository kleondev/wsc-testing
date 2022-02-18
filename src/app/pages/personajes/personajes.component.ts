import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Personajes } from 'src/app/providers/personajes/personajes.model';
import { PersonajesService } from 'src/app/providers/personajes/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajesService: PersonajesService) { }

  private unsubscribe$ = new Subject<void>();
  
  public year = new Date().getFullYear();
  public displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource(<any>[]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngOnInit(): void {
    this.personajesService.findAllPeronajes('hufflepuff')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response:any) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.initSort();
      this.dataSource.sort = this.sort;
    });
  }


  initSort() {
    this.dataSource.sortingDataAccessor = (data, key) => {
      switch (key) {
        case 'name': return data.name;
        case 'patronus': return data.patronus;
        case 'age': return data.dateOfBirth > 0 ? this.year - data.dateOfBirth : "";
        default: data[key]
      }
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
