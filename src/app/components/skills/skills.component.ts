import { Component, OnInit } from '@angular/core';
import {faFileCode} from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  icon=faFileCode
  habilidades:any;


    borrar = faTrash;

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
    this.api.getHabilidades().subscribe(data => {this.habilidades=data})
  }


  deleteHab(id:number){
    var alerta = window.confirm("Se eliminara la habilidad.");
    if(alerta===true){
      this.api.deleteHab(id).subscribe();
      window.location.reload()
    }
  }
}
