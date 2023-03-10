import { Component, OnInit } from '@angular/core';
import {faBook, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  book = faBook;
  editar = faPen;
  borrar = faTrash;

  educacion = [{id:1, titulo:"Ingeniero en Mentenimiento Industrial", instituto:"UGMA", fecha:"30/05/2018"},
  {id:2, titulo:"Bachiller", instituto:"Alfa y Omega", fecha:"30/07/2011"} ]

  constructor() { }

  ngOnInit(): void {
  }

}
