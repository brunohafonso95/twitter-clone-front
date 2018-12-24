import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  login(user) {
    // tslint:disable-next-line:no-bitwise
    const userData = {
      userName: user.userName,
      name: user.name
    };
    localStorage.setItem('user', JSON.stringify(userData));
    this.router.navigate(['timeline']);
  }

  isLogged() {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
