import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje, RickymortiResponse } from '../model/rickymorti-list-interface';

@Injectable({
  providedIn: 'root'
})
export class RickymortiServiceService {

  constructor(private http: HttpClient) { }

  getPersonajeList(): Observable<RickymortiResponse> {
    return this.http.get<RickymortiResponse>('https://rickandmortyapi.com/api/character');
  }

  findById(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`https://rickandmortyapi.com/api/character/${id}`);
  }

  getPag(pag: number): Observable<RickymortiResponse> {
    return this.http.get<RickymortiResponse>(`https://rickandmortyapi.com/api/character/?page=${pag}`);
  }
}
