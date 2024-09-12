import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../shared/services/product.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterseptor} from "./auth/auth.interseptor";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth.guard";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [

    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptor,
      multi: true
    }

  ]
})
export class CoreModule { }
