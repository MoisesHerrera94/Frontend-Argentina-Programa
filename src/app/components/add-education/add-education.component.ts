import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  model = {
    titulo:"",
    instituto:"",
    fecha:Date
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(values:any): void{
    console.log('Form values', values)
  }
}
