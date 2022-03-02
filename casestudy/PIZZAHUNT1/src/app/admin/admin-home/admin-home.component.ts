import { Component, OnInit } from '@angular/core';
import {CartserviceService} from 'src/app/service/cartservice.service';
import { Router } from '@angular/router';
import {Ordermodel} from 'src/app/IOrder';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public orderList:any;
  constructor(private carservice:CartserviceService) { }

  ngOnInit(): void {
    this.carservice.getOrder().
    subscribe((res)=>{
      this.orderList=res.orderData;
      // console.log(this.orderList);
    })
  }

}
