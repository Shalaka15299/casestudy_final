import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/service/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItem:number=0;
  constructor(private router:Router,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.cartService.getProductList()
    .subscribe(resp=>{
      this.totalItem=resp.length;
    })
  }

  logoutuser()
  {
    console.log("logout");
    this.router.navigate(['/']);
  }
}
