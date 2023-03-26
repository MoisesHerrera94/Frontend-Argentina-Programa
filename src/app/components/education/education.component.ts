import { Component, OnInit } from '@angular/core';
import {faBook, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { AddButtonComponent } from '../add-button/add-button.component';
import { ConexionApiService } from 'src/app/conexion-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  book = faBook;
  editar = faPen;
  borrar = faTrash;
  listEducacion:any;

  constructor(private api:ConexionApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getEducations().subscribe(data => {console.log(data); this.listEducacion = data})
  }

  onDelete(id:number){
    this.api.deleteEducacion(id).subscribe();
    window.location.reload()
  }

  editEdu(id:number){
    this.router.navigate(['editEducacion/', id])
  }

}
