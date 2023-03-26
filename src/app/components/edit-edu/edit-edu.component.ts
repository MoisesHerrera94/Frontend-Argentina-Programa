import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IEducacion } from '../interface/educacion.interface';
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  educacion:IEducacion={
    id:0,
    titulo:"",
    institucion:"",
    ano:0
  }

  constructor(private router:Router, private activeRouter:ActivatedRoute, private api:ConexionApiService) { }

  ngOnInit(): void {
    let eduId:any = this.activeRouter.snapshot.paramMap.get('id');
    this.api.buscarEducacion(eduId).subscribe(data => {this.educacion=data});
  }

  editando(){
    this.api.addEducacion(this.educacion).subscribe();
    this.router.navigate([''])
  }
}
