import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'signin', component: SignInComponent},
  {path:'editExperiencia/:id', component: EditExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
