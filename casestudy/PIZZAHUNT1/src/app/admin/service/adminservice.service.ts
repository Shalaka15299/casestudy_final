import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../view-user/IUser';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { IPizza } from 'src/app/pizza';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  public avail:boolean=false;
  public message:string="";
  public temp:any;
  private base_url="http://localhost:3000";
  private Products_add = "http://localhost:3000/app/products/add";
  private Products_find = "http://localhost:3000/app/products";
  private Products_update = "http://localhost:3000/app/products/update/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpclient:HttpClient) { }

   getUsers(){
    return this.httpclient.get<any>(this.base_url+"/app/users/")
    .pipe(map((res:any)=>{return res;}))
  }

  getProducts(){
    return this.httpclient.get<any>(this.base_url+"/app/products/")
    .pipe(map((res:any)=>{return res;}))
  }

  getProductById(id:string){
    return this.httpclient.get<any>(this.base_url+"/app/products/"+id)
    .pipe(map((res:any)=>{return res;}))
  }

  saveProduct(data:any){
    // console.log("data:"+data);
   return this.httpclient.post(this.base_url+"/app/products/add",data)
   .pipe(map((res:any)=>{return res;}))
  }

  create(Products: any): Observable<IPizza> {
    return this.httpclient.post<IPizza>(this.Products_add, JSON.stringify(Products), this.httpOptions);
  }

  find(id:number): Observable<IPizza> {
    return this.httpclient.get<IPizza>(this.Products_find+"/"+id);
  }

  update(id:number, Products: any): Observable<IPizza> {
    return this.httpclient.put<IPizza>(this.Products_update + id, JSON.stringify(Products), this.httpOptions)
  }

  deleteProduct(id:string){
    return this.httpclient.delete<any>(this.base_url+"/app/products/delete/"+id)
    .pipe(map((res:any)=>{return res;}))
  }

  login(data: any):Observable<any>{
    return this.httpclient.get(this.base_url+"/app/logins");
  }

}
