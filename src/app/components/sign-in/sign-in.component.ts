import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.form=this.initForm();
  }

  onSubmit(){
    console.log('forms', this.form.value)
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }
  
}
