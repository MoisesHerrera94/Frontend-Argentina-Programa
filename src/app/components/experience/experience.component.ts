import { Component, OnInit } from '@angular/core';
import {faBriefcase, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { ConexionApiService } from 'src/app/conexion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public work = faBriefcase;
  public editar = faPen;
  public borrar = faTrash;
  public listExperiencias:any;

  constructor(private conexion:ConexionApiService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.conexion.getExperiencias().subscribe(
      (data) => {this.listExperiencias = data}
    );
  }

  onClickDelete(id:number){
    this.conexion.deleteExperiencia(id).subscribe();
    window.location.reload()
  }

  editExp(id:number){
    this.router.navigate(['editExperiencia', id])
  }

}
