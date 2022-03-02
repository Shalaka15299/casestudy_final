import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public APIUrl:string="https://localhost:44324/api/product/";

  constructor(private http:HttpClient,private router:Router) { }


  postProduct(data : any){
    // return this.http.post<any>("http://localhost:3000/app/products/add",data)
    // return this.http.post<any>(`${this.APIUrl}getallproducts`,data)
    return this.http.post<any>(this.APIUrl+"addproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProduct(){
    // return this.http.get<any>("http://localhost:3000/app/products")
    return this.http.get<any>(this.APIUrl+"getallproducts")
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

  updateProduct(data : any){
    // return this.http.put<any>("http://localhost:3000/app/products/update/"+id,data)
    return this.http.put<any>(this.APIUrl+"updateproduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProduct(id : number){
    // return this.http.delete<any>("http://localhost:3000/app/products/delete/"+id)
    return this.http.delete<any>(this.APIUrl+"deleteproduct/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
