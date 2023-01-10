import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades = [{id:1, habilidad:"HTML5"}, {id:2, habilidad:"CSS3"}, {id:3, habilidad:"JavaScript"},
  {id:4, habilidad:"Angular"}, {id:5, habilidad:"TypeScript"}, {id:6, habilidad:"Java"}, {id:7, habilidad:"ReactJs"}]

  constructor() { }

  ngOnInit(): void {
  }

}
