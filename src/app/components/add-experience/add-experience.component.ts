import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { listaExerienciasI } from '../interface/experiencias.interface';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private conexion:ConexionApiService){
     
  }

  ngOnInit(): void {
  }

  onSubmit(values:listaExerienciasI){
    this.conexion.addExperiencia(values).subscribe(data => console.log(data));
    window.location.reload()
  }

}
