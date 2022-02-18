import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }

  findStudents() {
    return this.http.get('http://hp-api.herokuapp.com/api/characters/students');
  }

}
