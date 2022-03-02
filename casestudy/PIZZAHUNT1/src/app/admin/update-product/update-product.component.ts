import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AdminserviceService } from '../service/adminservice.service';
import { IPizza } from 'src/app/pizza';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: number;
  product!: IPizza;
  form!: FormGroup;
  constructor(public adminservice:AdminserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminservice.find(this.id).subscribe((data:IPizza)=>{
      this.product = data;
    });
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productSize: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      productImage: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.adminservice.update(this.id, this.form.value).subscribe((res:any) => {
         alert('Product Details updated successfully!');
         this.router.navigateByUrl('/viewpizza');
    })
  }

}
