import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public user!: User;
  public id:any;
  public myProfileUser:any;

  public name:any;
  public email:any;
  public contact:any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {


    // this.check()
    this.getOneuser()
  }
  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])
        }
        console.log(error);
      }
    )
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
        this.contact = this.myProfileUser.message["phone"]
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

            this.router.navigate(['/login'])

        }
        console.log(error);
      }
    )
  }

}
