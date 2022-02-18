import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  public form!: FormGroup;
  public year = new Date();
  

  public options = [
    {name: "Slytherin", value: "slytherin"},
    {name: "Gryffindor", value: "gryffindor"},
    {name: "Ravenclaw", value: "ravenclaw"},
    {name: "Hufflepuff", value: "hufflepuff"}
  ];
  
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit(): void {    
    this.year.setFullYear(this.year.getFullYear() - 8);
    this.form = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
      house: [null, [Validators.required]],
      fnacimiento: [null, [Validators.required]],
      foto: [null, [Validators.required]],
    });
  }

  onSave() {
    let nuevosEstudiantes = localStorage.getItem('estudiantes');
    if(nuevosEstudiantes){
      let estudiantes = [];

      estudiantes.push({
        name: this.form.getRawValue().nombre, 
        patronus: this.form.getRawValue().house.name, 
        yearOfBirth: this.form.getRawValue().fnacimiento.getFullYear(), 
        image: this.form.getRawValue().foto
      });

      estudiantes.push(...JSON.parse(nuevosEstudiantes));
      
      localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    }else{
      let estudiante = [
        {
          name: this.form.getRawValue().nombre, 
          patronus: this.form.getRawValue().house.name, 
          yearOfBirth: this.form.getRawValue().fnacimiento.getFullYear(), 
          image: this.form.getRawValue().foto
        }
      ];
      localStorage.setItem('estudiantes', JSON.stringify(estudiante));
    }

    this.form.reset();
  }

  onCancelar() {
    this.location.back()
  }

}
