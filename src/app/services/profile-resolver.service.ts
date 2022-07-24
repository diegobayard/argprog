import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Person> {

  constructor(private profileService: ProfileService) { }

  resolve(): Observable<Person> {
    return this.profileService.getPerson()
  }
  
}
