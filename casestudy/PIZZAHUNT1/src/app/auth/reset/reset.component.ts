import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  msg: any = [];
  avail!: boolean;
  arr: any;
  checkmail!: boolean;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    if (!f.valid) {
      this.msg = "Invalid Email";
      this.avail = true;
      return;
    }
 }

}
