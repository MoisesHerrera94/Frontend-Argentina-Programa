import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  model = {
    titulo:"Un titulo",
    tecnologias:"Una tecno",
    repositorio:"Un link"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log('Form', value)
  }
}
