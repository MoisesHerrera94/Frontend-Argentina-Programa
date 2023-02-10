import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProjectsComponent } from './components/add-projects/add-projects.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'signin', component: SignInComponent},
  {path:'addEducation', component: AddEducationComponent},
  {path:'addExperience', component: AddExperienceComponent},
  {path:'addProject', component: AddProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
