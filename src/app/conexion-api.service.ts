import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaExerienciasI } from './components/interface/experiencias.interface';

@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  private url = "http://localhost:8090";

  constructor(private http:HttpClient) {
    
  }

  getExperiencias():Observable<listaExerienciasI[]>{
    let verExp = "/experiencias/ver" 
    return this.http.get<listaExerienciasI[]>(this.url+verExp);
  }

  addExperiencia(form:listaExerienciasI):Observable<listaExerienciasI>{
    let addExp = "/experiencia/crear"
    return this.http.post<listaExerienciasI>(this.url+addExp, form);
  }

  deleteExperiencia(id:number):Observable<listaExerienciasI>{
    let delExp = "/experiencia/borrar/";
    console.log(this.url+delExp+id)
    return this.http.delete<listaExerienciasI>(this.url+delExp+id);
  }
}
