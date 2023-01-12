import { Component, OnInit } from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  github = faGithub;

  proyectos = [{id:1, nombre:"Proyecto 1", tecnologias:"Las tecnologias", link:""}, 
  {id:2, nombre:"Proyecto 2", tecnologias:"Las tecnologias", link:""}, 
  {id:3, nombre:"Proyecto 3", tecnologias:"Las tecnologias", link:""}, 
  {id:4, nombre:"Proyecto 4", tecnologias:"Las tecnologias", link:""}]

  constructor() { }

  ngOnInit(): void {
  }

}
