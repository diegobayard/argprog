import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {

  API_URL: string = 'https://mighty-lowlands-81769.herokuapp.com/'

  constructor(private httpClient: HttpClient) { }

  viewPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.API_URL}/view-persons`)
  }

  viewPerson(id:number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.API_URL}/view-person/${id}`)
  }

  deletePerson(id:number) {
    return this.httpClient.delete(`${this.API_URL}/admin/delete-person/${id}`)
  }

}
