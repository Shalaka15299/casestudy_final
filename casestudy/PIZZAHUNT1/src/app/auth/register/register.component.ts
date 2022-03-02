import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg: any = [];
  avail!: boolean;
  // var checkArray;
  arr: any = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // Check if the user already exists
    for (var val of this.arr) {
      var a = val['email'];
      var b = f.controls['email'].value;
      if (a == b) {
        this.msg = "User already exist with this user name (email)!!";
        this.avail = true;
        return;
      }
    }

    // check if the pass and conf pass match
    if (f.controls["p1"].value != f.controls["p2"].value) {
      this.msg = "Password   doesn't match";
      this.avail = true;
      return;
    }

     // check if the form fields are valid
     if (!f.valid) {
      this.msg = "Invalid Form Fields";
      this.avail = true;
      return;
    }

    //create user to tregister
    this.authService.register(JSON.stringify({

      "userName": f.controls['name'].value,
      "userEmail": f.controls['email'].value,
      "Phone": f.controls['contact'].value,
      "password": f.controls["p1"].value
  }))
    .subscribe(
      data => {
        this.authService.msg = "successfully registered a user!";
        this.router.navigate(['/login']);

      },
      error => { console.error(error); this.msg = error; }
    )
}



}
