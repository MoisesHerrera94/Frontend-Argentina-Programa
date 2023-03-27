import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { ConnectConfig } from 'rxjs';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  github = faGithub;
  editar = faPen;
  borrar = faTrash;
  proyectos:any;

  constructor(private api:ConexionApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getProyectos().subscribe(data => {this.proyectos=data})
  }

  onDelete(id:number){
    let alerta = window.confirm("Se eliminara el item");
    if(alerta===true){
      this.api.deleteProyecto(id).subscribe();
      window.location.reload()
    }
  }

  editProject(id:number){
    this.router.navigate(['editProject/', id])
  }
}
