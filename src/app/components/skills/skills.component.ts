import { Component, OnInit } from '@angular/core';
import {faHtml5, faJsSquare, faCss3, faBootstrap, faAngular, faGit, 
faGithub, faReact} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades = [{id:1, habilidad:"HTML5", icon:faHtml5}, {id:2, habilidad:"CSS3", icon:faCss3}, {id:3, habilidad:"JavaScript", icon:faJsSquare},
  {id:4, habilidad:"Angular", icon:faAngular}, {id:5, habilidad:"TypeScript", icon:faFileCode}, {id:6, habilidad:"Java", icon:faFileCode}, {id:7, habilidad:"ReactJs", icon:faReact}]

  constructor() { }

  ngOnInit(): void {
  }

}
