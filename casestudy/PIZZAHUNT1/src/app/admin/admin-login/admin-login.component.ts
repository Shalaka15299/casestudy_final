import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminserviceService } from '../service/adminservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // public loginform!: FormGroup;
  public msg: any = [];
  public avail!: boolean;
  public isAdmin!: boolean;
  public isBlocked!: boolean;
  // var checkArray;
  arr: any = [];
  constructor(private http: HttpClient, private router: Router,private adminservice:AdminserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    const formData = {
      username:f.value.name,
      password:f.value.password
    }



       // console.log(JSON.stringify(this.loginForm.value));
       this.adminservice.login(f.value.name).subscribe(
        data => {
          const user=data.find((a:any)=>{
            console.log("a.username"+a.username);
            console.log("f.value.name"+f.controls['username'].value);
            console.log("f.value.password"+f.value.password)
            return a.username===f.controls['username'].value && a.password===f.controls['password'].value;
          })
          // console.log(data);
          if(user){
            alert("Login Successfully");
          this.router.navigate(['/admin']);
          }
          else{
            alert("Username or Password is invalid");
          }
        },
        error => {
           console.error(error);
           this.msg = error;
          }
      )
  }


}
