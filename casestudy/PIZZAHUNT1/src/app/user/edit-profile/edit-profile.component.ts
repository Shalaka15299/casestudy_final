import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public user!: User;
  public id: any;
  public name: any;
  public email: any;
  public contact: any;
  public new:any;
  public editProfileObj: any;


constructor(private router: Router, private authService: AuthService) { }

ngOnInit(): void {
  this.new = true;
  // this.check()
  this.getOneuser()
}
getOneuser()
{
  this.id = localStorage.getItem('userid')

  this.authService.Oneuser(JSON.stringify({"id":this.id})).subscribe(
    data => {
      this.editProfileObj = data
      // console.log(this.myProfileUser["userEmail"]);
      this.name = this.editProfileObj.message["userName"]
      this.email = this.editProfileObj.message["userEmail"]
      this.contact = this.editProfileObj.message["phone"]
    },
    (error) => {

      if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login'])

      }
      console.log(error);
    }
  )
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
enable()
{
  this.new =false;
}
change() {
  localStorage.setItem('userid',this.id);

  this.authService.editprofile(JSON.stringify({"id":this.id,"userEmail":this.email,"userName": this.name,"Phone" : this.contact})).subscribe(
    data => {
      console.log(data);

      alert("profile updated successfully!!");
        // this.authService.msg="profile updated successfully!!"
      this.router.navigate(['/my-profile'])
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
