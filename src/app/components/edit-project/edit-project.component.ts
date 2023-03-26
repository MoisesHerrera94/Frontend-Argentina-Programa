import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { IProyecto } from '../interface/proyecto.interface';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  proyecto:IProyecto={
    id:0,
    nombre:"",
    tecnologias:"",
    link:""
  }


  constructor(private router:Router, private activeRoute:ActivatedRoute, private api:ConexionApiService) { }

  ngOnInit(): void {
    let projectId:any = this.activeRoute.snapshot.paramMap.get('id');
    this.api.buscarProyecto(projectId).subscribe(data => this.proyecto=data)
  }

  editProject(){
    this.api.addProyecto(this.proyecto).subscribe();
    this.router.navigate([''])
  }

}
