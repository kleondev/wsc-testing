import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ProfesoresService } from 'src/app/providers/profesores/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();
  
  public year = new Date().getFullYear();
  public displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource(<any>[]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public isLoading = false;
  
  public options = [
    {name: "Slytherin", value: "slytherin"},
    {name: "Gryffindor", value: "gryffindor"},
    {name: "Ravenclaw", value: "ravenclaw"},
    {name: "Hufflepuff", value: "hufflepuff"}
  ];

  constructor(
    private profesoresService: ProfesoresService,
  ) { }

  ngOnInit(): void {
    this.loadProfesores();
  }

  loadProfesores() {
    this.isLoading = true;
    this.profesoresService.findAllStaff()
    .pipe(
      finalize(() =>  this.isLoading = false),
      takeUntil(this.unsubscribe$))
    .subscribe( (response:any) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.initSort();
      this.dataSource.sort = this.sort;
    })
  }


  initSort() {
    this.dataSource.sortingDataAccessor = (data, key) => {
      switch (key) {
        case 'name': return data.name;
        case 'patronus': return data.patronus;
        case 'age': return data.yearOfBirth > 0 ? data.yearOfBirth : "";
        default: data[key]
      }
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
