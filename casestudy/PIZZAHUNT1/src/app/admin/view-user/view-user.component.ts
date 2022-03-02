import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { IUser } from './IUser';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
   public userList:any;
  constructor(private adminservice:AdminserviceService) { }


  ngOnInit(): void {
    this.adminservice.getUsers()
    .subscribe((res:any)=>{
      this.userList=res;
    })
  }

}
