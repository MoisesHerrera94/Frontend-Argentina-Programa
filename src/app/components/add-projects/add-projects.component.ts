import { Component, OnInit } from '@angular/core';
import { IProyecto } from '../interface/proyecto.interface';
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
  }

  onSubmit(value:IProyecto){
    this.api.addProyecto(value).subscribe(data => console.log(data));
    window.location.reload()
  }
}
