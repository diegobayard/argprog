import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { ViewProfileService } from './view-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ListPersonsResolverService implements Resolve<Array<Person>> {

  constructor(private viewProfileService: ViewProfileService) { }

  resolve(): Observable<Array<Person>> {
    return this.viewProfileService.viewPersons()
  }
  
}
