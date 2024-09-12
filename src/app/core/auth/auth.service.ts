import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isLogged = false;

  logIn(){
    this.isLogged = true;
  }

  logOut(){
    this.isLogged = false;
  }

  getTocken(){
    return 'test';
  }

  isLoggedIn(): boolean{
    return this.isLogged;
  }
}
