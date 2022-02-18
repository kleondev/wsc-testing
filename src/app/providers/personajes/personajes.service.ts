import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from './personajes.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  findAllPeronajes(houseName: string): Observable<Personajes> {
    return this.http.get<Personajes>('http://hp-api.herokuapp.com/api/characters/house/'+ houseName);
  }
  
}
