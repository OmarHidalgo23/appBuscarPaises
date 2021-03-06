import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  // private params = new HttpParams().set('fields', '{name,capital,population,flags')



  constructor(private http: HttpClient) {
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(terminoCapital: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${terminoCapital}`;
    return this.http.get<Pais[]>(url);
  }

  buscarRegion(terminoRegion: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${terminoRegion}`;
    return this.http.get<Pais[]>(url)
    
  }

  verPais(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }


}
