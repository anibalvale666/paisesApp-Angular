import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  privateUrl: string = 'https://restcountries.com';

  get httpParams() {
    return  new HttpParams()
    .set( 'fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]> {
    const url = `${this.privateUrl}/v2/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  buscarCapital( termino: string): Observable<Country[]> {
    const url = `${this.privateUrl}/v2/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorCodigo( id:string): Observable<Country> {
    const url = `${this.privateUrl}/v2/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarPorRegion(termino: string): Observable<Country[]> {



    const url = `${this.privateUrl}/v2/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      // .pipe(
      //   tap(console.log)
      // );
  }

}
