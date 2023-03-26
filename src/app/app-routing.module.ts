import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'signin', component: SignInComponent},
  {path:'editExperiencia/:id', component: EditExpComponent},
  {path:'editEducacion/:id', component: EditEduComponent},
  {path:'editProject/:id', component:EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
