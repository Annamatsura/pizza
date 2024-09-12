import {Component, OnDestroy, OnInit} from '@angular/core';
// import {ProductType} from "../../../../types/product.type";
// import {ProductService} from "../../../shared/services/product.service";
// import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../../environments/environment";
// import {error} from "@angular/compiler-cli/src/transformers/util";




// declare var bootstrap: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy{




  // lateData: Promise<string> | null = null;

  private observable: Observable<number>;
  constructor(private modalService: NgbModal) {
    // this.observable = from([1,2,3,4,5]);
    this.observable = new Observable((observer) => {
      let count = 0 ;
      const interval = setInterval(() => {
        observer.next(count++);
      }, 1000);
      const timeout1 = setTimeout(() => {
        observer.complete();
      }, 4000);
      const timeout2 = setTimeout(() => {
        observer.error('world');
      }, 5000);

      return {
        unsubscribe() {
          clearInterval(interval);
          clearTimeout(timeout1);
          clearTimeout(timeout2);
        }
      }

    });
  }

  private subscription: Subscription | null = null;

  ngOnInit() {
    // this.modalService.open(content, {})
    // const myModalAlternative = new bootstrapp.Modal('#myModal', {});
    // myModalAlternative.show();

    // console.log(environment.production);

    this.subscription = this.observable
      .pipe(
        map((number) => {
          return number * 10;
        })
      )
      .subscribe(
      {
      next: (param: number) => {
        console.log('subscriber 1: ', param);
      },
        error: (error: string)  => {
          console.log('ERROR!!! ' + error);
        }
      }
    )

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test(){
    this.observable.subscribe((param: number) => {
      console.log('subscriber 2: ',param);
    })
  }

  // ngOnInit(){
  //   this.products = this.productService.getProducts();
  //
  //   // this.lateData = new Promise<string>(function (resolve) {
  //   //   setTimeout()
  //   // })
  // }

  // public scrollTo(target: HTMLElement): void{
  //   target.scrollIntoView({behavior: "smooth"});
  // }




}
