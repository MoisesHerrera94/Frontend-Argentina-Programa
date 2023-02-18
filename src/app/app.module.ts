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
import { FormsModule } from '@angular/forms';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddProjectsComponent } from './components/add-projects/add-projects.component';
import { ExperienceModalComponent } from './components/modals/experience-modal/experience-modal.component';
import { EducationModalComponent } from './components/modals/education-modal/education-modal.component';
import { ProjectModalComponent } from './components/modals/project-modal/project-modal.component';

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
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
