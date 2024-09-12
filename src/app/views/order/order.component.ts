import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";
import {response} from "express";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit, OnDestroy{

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  constructor(private cartService: CartService, private activatedRoute : ActivatedRoute, private productService: ProductService) {
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  ngOnInit(){
    // if (this.cartService.product-card){
    //   this.formValues.productTitle = this.cartService.product-card;
    // }

    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam){
    //   this.formValues.productTitle =productParam;
    // }

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']){
        this.formValues.productTitle = params['product'];
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  // test(){
  //   this.subscription?.unsubscribe();
  // }

  public createOrder(): void{
    if (!this.formValues.productTitle){
      alert('заполните пиццу');
      return;
    }
    if (!this.formValues.address){
      alert('заполните адрес');
      return;
    }
    if (!this.formValues.phone){
      alert('заполните телефон');
      return;
    }

    //ajax
    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message){
          alert('Спасибо за заказ');
          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',
          }
        } else {
          alert('Error');
        }
      })
  }
}
