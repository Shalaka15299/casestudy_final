import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // addedBook: any = [];

  public products:any[]=[];
  public grandTotal !: number;
  constructor(private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProductList()
    .subscribe(res=>{
      this.products=res;
     // console.log(this.products);
      this.products.forEach(element=>{
        console.log(element.product);
      })
      this.grandTotal=this.cartService.getTotalPrice();
    });
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }


  // delete() {
  //   this.addedBook.splice(this.addedBook.indexOf(this.products), 1);
  // }

  emptycart(){
    this.cartService.removeAllCart();
  }

}
