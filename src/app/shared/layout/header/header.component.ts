import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public cartService: CartService, public authService: AuthService) {
  }

  login(){
    this.authService.logIn();
  }

  logout(){
    this.authService.logOut();
  }

}
