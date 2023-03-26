import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { IAcerdaDe } from '../../interface/acercade.interface';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit {
  acercaDe:IAcerdaDe={
    id:0,
    descripcion:""
  }

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
    this.api.verAcercaDe(1).subscribe(data => this.acercaDe=data)
  }

  editar(){
    this.api.editarAcercaDe(this.acercaDe).subscribe();
    window.location.reload()
  }

}
