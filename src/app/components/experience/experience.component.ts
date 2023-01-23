import { Component, OnInit } from '@angular/core';
import {faBriefcase, faPen, faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  work = faBriefcase;
  editar = faPen;
  borrar = faTrash;

  experiencias = [{id: 1, puesto:"Administrativo de Ventas", empresa:"M Royo SA", fechaD:"15/02/2019",
  fechaA:"Actualidad"}, {id: 2, puesto:"Vendedor", empresa:"F Falinia CA", fechaD:"01/11/2013",
  fechaA:"30/04/2018"}]

  constructor() { }

  ngOnInit(): void {
  }

}
