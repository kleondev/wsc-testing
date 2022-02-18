import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http: HttpClient) { }

  findAllStaff()  {
    return this.http.get('http://hp-api.herokuapp.com/api/characters/staff');
  }

}
