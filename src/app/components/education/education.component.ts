import { Component, OnInit } from '@angular/core';
import {faBook} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  book = faBook;

  educacion = [{id:1, titulo:"Ingeniero en Mentenimiento Industrial", instituto:"UGMA", fecha:"30/05/2018"},
  {id:2, titulo:"Bachiller", instituto:"Alfa y Omega", fecha:"30/07/2011"} ]

  constructor() { }

  ngOnInit(): void {
  }

}
