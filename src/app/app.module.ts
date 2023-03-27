import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProjectsComponent } from './components/add-projects/add-projects.component';
import { ExperienceModalComponent } from './components/modals/experience-modal/experience-modal.component';
import { EducationModalComponent } from './components/modals/education-modal/education-modal.component';
import { ProjectModalComponent } from './components/modals/project-modal/project-modal.component';
import { ConexionApiService } from './conexion-api.service';
import {HttpClientModule} from '@angular/common/http';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { AboutModalComponent } from './components/modals/about-modal/about-modal.component';
import { HabModalComponent } from './components/modals/hab-modal/hab-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    SignInComponent,
    AddButtonComponent,
    HomePageComponent,
    AddEducationComponent,
    AddExperienceComponent,
    AddProjectsComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    ProjectModalComponent,
    EditExpComponent,
    EditEduComponent,
    EditProjectComponent,
    AboutModalComponent,
    HabModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConexionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
