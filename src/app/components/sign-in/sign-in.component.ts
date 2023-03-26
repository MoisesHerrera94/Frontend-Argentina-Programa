import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    
  }

  onLogin(form:any){
    console.log(form);
  }
}
