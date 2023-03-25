import { Component, OnInit } from '@angular/core';
import {faBriefcase, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public work = faBriefcase;
  public editar = faPen;
  public borrar = faTrash;
  public llamada:any;

  experiencias = [{id: 1, puesto:"Administrativo de Ventas", empresa:"M Royo SA", fechaD:"15/02/2019",
  fechaA:"Actualidad"}, {id: 2, puesto:"Vendedor", empresa:"F Falinia CA", fechaD:"01/11/2013",
  fechaA:"30/04/2018"}]

  constructor(private conexion:ConexionApiService) {
    
   }

  ngOnInit(): void {
    this.conexion.getExperiencias().subscribe(
      (data) => {this.llamada = data}
    );
  }

  onClickDelete(id:number){
    console.log("Este es el Id: "+id)
    this.conexion.deleteExperiencia(id).subscribe(data => console.log(data));
  }

}
