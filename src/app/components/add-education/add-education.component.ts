import { Component, OnInit } from '@angular/core';
import { IEducacion } from '../interface/educacion.interface';
import { ConexionApiService } from 'src/app/conexion-api.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private api:ConexionApiService) { }

  ngOnInit(): void {
  }
  
  onSubmit(values:IEducacion){
    this.api.addEducacion(values).subscribe(data => console.log(data));
    window.location.reload()
  }
}
