import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = []

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>('https://testologia.ru/pizzas', {
      // // observe: 'response'
      // headers: new HttpHeaders({
      //   Authorization: 'auth-token'
      // }),
      // params: params
    })
      // .pipe(
      //   // tap((result) => { //для сторонних операций которые не касаются изменения данных
      //   //   console.log(result);
      //   // }),
      //
      //   map((result) => (result.data)),
      //   // catchError(error => { //сработает только если observable завершается с ошибкой
      //   //   // throw new Error('omg');
      //   //   return of([])
      //   // })
      // );
  }
  getProduct(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(`https://testologia.ru/pizzas?id=${id}`);
    // return this.products.find(item => (item.id === id));
  }

  createOrder(data: {product: string, address: string, phone: string}){
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-pizza`, data);
  }
}
