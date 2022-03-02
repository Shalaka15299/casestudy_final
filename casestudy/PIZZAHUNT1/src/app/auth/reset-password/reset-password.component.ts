import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  msg: any = [];
  avail!: boolean;
  arr: any;
  checkmail!: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {


    if (!f.valid) {
      this.msg = "Invalid Email";
      this.avail = true;
      return;
    }
    else {
      this.authService.reset(JSON.stringify({ "userEmail": f.value.email, "password": f.value.password })).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['/login']);
        }
      )
    }
  }
}
