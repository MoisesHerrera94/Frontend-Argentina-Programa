import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { listaExerienciasI } from '../interface/experiencias.interface';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})

export class EditExpComponent implements OnInit {

  valores:listaExerienciasI={
    id:0,
    puesto:"",
    empresa:"",
    mesI:"",
    anoI:0,
    mesC:"",
    anoC:0
  };

  constructor(private router:Router, private activeRoute:ActivatedRoute, private api:ConexionApiService) { }

  ngOnInit(): void {
    let expId= this.activeRoute.snapshot.paramMap.get('id');
    console.log('Este es el ID por route: '+ expId)

    this.api.buscarExperiencia(expId).subscribe(data => {this.valores=data});
  }

  editando(){
    this.api.addExperiencia(this.valores).subscribe()
    this.router.navigate([''])
  }

}
