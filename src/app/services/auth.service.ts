import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'https://mighty-lowlands-81769.herokuapp.com/'
  ACCES_TOKEN: any

  constructor(private httpClient: HttpClient, private router:Router) { }

  register(user: User) {
    return this.httpClient.post(`${this.API_URL}/registration`, user).subscribe(() => {this.router.navigateByUrl(`/greetings/${user.email}`)})
  }

  login(user: User): any {
    return this.httpClient.post(`${this.API_URL}/authenticate`, user).subscribe((res: any) => {
      window.localStorage.setItem("ACCES_TOKEN", res.jwt), this.router.navigateByUrl('/edit-profile')
    })
  }

}
