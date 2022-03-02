import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from 'src/app/Product';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  message:any=[];
  avail!: boolean;

  formValue !: FormGroup;
  productObj : ProductModel = new ProductModel();
  productData !: any;
  showAdd!: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder:FormBuilder,private api:AdminService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      productName : ['',Validators.required],
      productSize : ['',Validators.required],
      productPrice : ['',Validators.required],
      productImage : ['',Validators.required]
    })
    this.getAllProduct();

  }


  postProductDetails(){
    this.productObj.productName = this.formValue.value.productName;
    this.productObj.productSize = this.formValue.value.productSize;
    this.productObj.productPrice = this.formValue.value.productPrice;
    this.productObj.productImage = this.formValue.value.productImage;


    // console.log(this.empObj);
    this.api.postProduct(this.productObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product added successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    },
    error=>{
      alert("Something went wrong");
    }
    )
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  getAllProduct(){
     this.api.getProduct()
     .subscribe(res=>{
        this.productData=res.productDetails;
     })
  }

  deleteProduct(data : any){
    this.api.deleteProduct(data.id)
    .subscribe(res=>{
      alert("Product deleted");
      // this.employeeData=res;
      this.getAllProduct();
    })
  }


  onEdit(row : any){
    this.showAdd=false;
    this.showUpdate=true;
    this.productObj.id=row.id;
    this.formValue.controls['productName'].setValue(row.productName);
    this.formValue.controls['productSize'].setValue(row.productSize);
    this.formValue.controls['productPrice'].setValue(row.productPrice);
    this.formValue.controls['productImage'].setValue(row.productImage);

  }

  updateProductDetails(){
    this.productObj.productName = this.formValue.value.productName;
    this.productObj.productSize = this.formValue.value.productSize;
    this.productObj.productPrice = this.formValue.value.productPrice;
    this.productObj.productImage = this.formValue.value.productImage;

    this.api.updateProduct(this.productObj)
    .subscribe(res=>{
      alert("updated successfully");
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllProduct();
    })
  }



}


