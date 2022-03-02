import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordermodel } from 'src/app/IOrder';
import { AuthService } from 'src/app/service/auth.service';
import { CartserviceService } from 'src/app/service/cartservice.service';
import { User } from 'src/app/user';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  OdrerData!:Ordermodel[];
  form!: FormGroup;
  public user!: User;
  public id:any;
  public emailId:any;
  public myProfileUser:any;
  public products:any[]=[];
  public grandTotal !: number;
  public name:any;
  public email:any;
  public contact:any;
  public productName:any;
  // public userAddress:any;
  userAddress:FormGroup=new FormGroup({});
  public paymentMode:string='COD';
  public orderStatus:string='Order Placed';
  constructor(private http:HttpClient,private router:Router,private orderservice:CartserviceService,private authService: AuthService) { }

  ngOnInit(): void {
    this.getOneuser();
    this.orderservice.getProductList()
    .subscribe(res=>{
      this.products=res;
     console.log(this.products);
      this.products.forEach(element=>{
        console.log(element.product);
      })
      this.grandTotal=this.orderservice.getTotalPrice();
    });
    // this.form = new FormGroup({
    //   userAddress: new FormControl('', [Validators.required]),
    //   paymentMode: new FormControl('', Validators.required),
    // });
  }


  getOneuser()
  {
    this.id = localStorage.getItem('userid')

    this.authService.Oneuser(JSON.stringify({"id":this.id})).subscribe(
      data => {
        this.myProfileUser = data
        // console.log(this.myProfileUser["userEmail"]);
        this.name = this.myProfileUser.message["userName"]
        this.email = this.myProfileUser.message["userEmail"]
        this.contact = this.myProfileUser.message["Phone"]
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }


  placeorder()
  {
   const formData={
    userid: this.id,
    userName: this.name,
    // userAddress:'Panvel',
    paymentMode:'COD',
    grandTotal:this.grandTotal,
    orderStatus:'Order Placed',
   }
   console.log(formData)
   this.orderservice.postOrder(formData)
   .subscribe((res)=>{
     console.log(formData);
     alert("Order Placed Successfully");
   })

  }
}
