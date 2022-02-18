import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { finalize, Subject, takeUntil } from 'rxjs';
import { EstudiantesService } from 'src/app/providers/estudiantes/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  constructor(
    private estudiantesService: EstudiantesService,
    private formBuilder: FormBuilder) { }

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

  ngOnInit(): void {
    this.loadStudets();
  }

  loadStudets() {
    this.dataSource.data = [];
    this.isLoading = true;
    this.estudiantesService.findStudents()
    .pipe(
      finalize(() =>  this.isLoading = false),
      takeUntil(this.unsubscribe$))
    .subscribe( (response:any) => {

      let estudiantes = [];
      let nuevosEstudiantes = localStorage.getItem('estudiantes');
      if(nuevosEstudiantes){ estudiantes.push(...JSON.parse(nuevosEstudiantes)) }
      estudiantes.push(...response);
      
      this.dataSource.data = estudiantes;
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
        case 'age': return data.yearOfBirth > 0 ? data.yearOfBirth : 0;
        default: data[key]
      }
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
