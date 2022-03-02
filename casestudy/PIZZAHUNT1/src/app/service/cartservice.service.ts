import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  public cartItemList : any=[];
  public productList = new BehaviorSubject<any>([]);
  public APIUrl:string="https://localhost:44324/api/Values/";

  constructor(private http:HttpClient,private router:Router) { }

  postOrder(data : any){
    // return this.http.post<any>("http://localhost:3000/app/orders/add",data)
    return this.http.post<any>(this.APIUrl+"addorder",data)
    // return this.http.post<any>(`${this.APIUrl}getallproducts`,data)
    // return this.http.post<any>(this.APIUrl+"addproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getOrder(){
    // return this.http.get<any>("http://localhost:3000/app/order")
    return this.http.get<any>(this.APIUrl+"getalldata")
    .pipe(map((res:any)=>{
      return res;
    },
    (error:any)=>{
      if (error instanceof HttpErrorResponse) {

        this.router.navigate(['/login'])

      }
      console.log(error);
    }
    ))
  }

  getProductList(){
    return this.productList.asObservable();
  }



  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any, pQuantity:number){
    const _product={product:product,quantity:pQuantity};
    this.cartItemList.push(_product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      const q:number=parseInt(a.quantity);
      grandTotal +=a.product.productPrice*q;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}


