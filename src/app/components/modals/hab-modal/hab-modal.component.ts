import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { IHabilidad } from '../../interface/habilidad.interface';

@Component({
  selector: 'app-hab-modal',
  templateUrl: './hab-modal.component.html',
  styleUrls: ['./hab-modal.component.css']
})
export class HabModalComponent implements OnInit {

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
  }

  addHab(form:IHabilidad){
    this.api.crearHabilidad(form).subscribe();
    window.location.reload()
  }
}
