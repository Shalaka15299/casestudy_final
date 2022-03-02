import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { ProductModel } from 'src/app/Product';

@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.component.html',
  styleUrls: ['./view-pizza.component.css']
})
export class ViewPizzaComponent implements OnInit {
  // avail: boolean = false;

  public productList:any;
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
      this.viewProduct();

  }

   viewProduct(){
    this.adminService.getProduct()
    .subscribe((res:any)=>{
      this.productList=res.productDetails;
    })
  }

}



