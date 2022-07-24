import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ListPersonsResolverService } from './services/list-persons-resolver.service';
import { ProfileResolverService } from './services/profile-resolver.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'greetings/:email', component: GreetingsComponent },
  { path: 'edit-profile', component: EditProfileComponent, resolve: { person: ProfileResolverService } },
  { path: 'list-persons', component: ListPersonsComponent, resolve: { persons: ListPersonsResolverService } },
  { path: 'admin-panel', component: AdminPanelComponent, resolve: { persons: ListPersonsResolverService } },
  { path: 'view-profile/:id', component: ViewProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
