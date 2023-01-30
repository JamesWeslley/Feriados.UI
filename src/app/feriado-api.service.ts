import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeriadoApiService {

  readonly feriadoApiUrl = "https://localhost:5001/feriados/";

  constructor(private http: HttpClient) { }

  obterFeriado(): Observable<any[]> {
    return this.http.get<any>(this.feriadoApiUrl);
  }

  adicionarFeriado(feriado: any): Observable<any> {
    return this.http.post(this.feriadoApiUrl, feriado);
  }

  atualizarFeriado(id: number | string, feriado: any): Observable<any> {
    return this.http.put(this.feriadoApiUrl + id, feriado);
  }

  deletarFeriado(id: number | string): Observable<any> {
    console.log(id);
    return this.http.delete(this.feriadoApiUrl + id);
  }
}
