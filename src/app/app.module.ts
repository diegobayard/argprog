import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { EditNameComponent } from './components/edit-name/edit-name.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { EditTitleComponent } from './components/edit-title/edit-title.component';
import { EditDomicileComponent } from './components/edit-domicile/edit-domicile.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { NewStudyComponent } from './components/new-study/new-study.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { EditStudyComponent } from './components/edit-study/edit-study.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditBannerComponent } from './components/edit-banner/edit-banner.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    ViewProfileComponent,
    ListPersonsComponent,
    GreetingsComponent,
    EditNameComponent,
    EditAvatarComponent,
    EditTitleComponent,
    EditDomicileComponent,
    EditContactComponent,
    EditAboutComponent,
    NewExperienceComponent,
    NewStudyComponent,
    NewSkillComponent,
    NewProjectComponent,
    EditExperienceComponent,
    EditStudyComponent,
    EditSkillComponent,
    EditProjectComponent,
    EditBannerComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
