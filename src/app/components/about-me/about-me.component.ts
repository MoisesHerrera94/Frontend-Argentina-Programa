import { Component, OnInit } from '@angular/core';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import { IAcerdaDe } from '../interface/acercade.interface';
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  pen = faPen;
  acercaDe:IAcerdaDe={
    id:0,
    descripcion:""
  }

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
    this.api.verAcercaDe(1).subscribe(data => this.acercaDe=data)
  }

}
