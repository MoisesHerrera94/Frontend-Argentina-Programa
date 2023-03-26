import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listaExerienciasI } from './components/interface/experiencias.interface';
import { IEducacion } from './components/interface/educacion.interface';
import { IProyecto } from './components/interface/proyecto.interface';

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
    return this.http.delete<listaExerienciasI>(this.url+delExp+id);
  }

  buscarExperiencia(id:any):Observable<listaExerienciasI>{
    let buscarExp = "/experiencia/buscar/"
    return this.http.get<listaExerienciasI>(this.url+buscarExp+id)
  }

  getEducations():Observable<IEducacion>{
    let listEducacion = "/educacion/ver"
    return this.http.get<IEducacion>(this.url+listEducacion);
  }

  addEducacion(form:IEducacion):Observable<IEducacion>{
    let addEdu = "/educacion/crear"
    return this.http.post<IEducacion>(this.url+addEdu, form);
  }

  deleteEducacion(id:number):Observable<IEducacion>{
    let deleteEdu = "/educacion/borrar/"
    return this.http.delete<IEducacion>(this.url+deleteEdu+id);
  }

  buscarEducacion(id:number):Observable<IEducacion>{
    let buscarEdu = "/educacion/buscar/"
    return this.http.get<IEducacion>(this.url+buscarEdu+id);
  }

  getProyectos():Observable<IProyecto>{
    let listProyectos = "/proyectos/ver"
    return this.http.get<IProyecto>(this.url+listProyectos)
  }

  addProyecto(form:IProyecto):Observable<IProyecto>{
    let addProyecto = "/proyecto/crear"
    return this.http.post<IProyecto>(this.url+addProyecto, form)
  }

  deleteProyecto(id:number):Observable<IProyecto>{
    let delProyecto = "/proyecto/borrar/"
    return this.http.delete<IProyecto>(this.url+delProyecto+id);
  }

  buscarProyecto(id:number):Observable<IProyecto>{
    let buscarProyecto ="/proyectos/buscar/"
    return this.http.get<IProyecto>(this.url+buscarProyecto+id)
  }
}
