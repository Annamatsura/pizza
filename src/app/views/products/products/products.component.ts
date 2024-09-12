import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  public products: ProductType[] = [];
  public loading: boolean = false;

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {}

  ngOnInit(){
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data)  => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }

      )

    // this.products = this.productService.getProducts();

    // this.lateData = new Promise<string>(function (resolve) {
    //   setTimeout()
    // })
  }
  // public addToCart(title: string): void{
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  //

    // this.scrollTo(target);
    // this.formValues.productTitle = title;
    // this.cartService.count++;

    //logic

    // this.products = this.products.filter(item => item.title.toUpperCase() !== title.toUpperCase());
  // }
}
