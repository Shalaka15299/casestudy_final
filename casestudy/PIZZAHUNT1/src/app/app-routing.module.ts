import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { ViewPizzaComponent } from './admin/view-pizza/view-pizza.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetComponent } from './auth/reset/reset.component';
import { FamousComponent } from './ind/famous/famous.component';
import { MainComponent } from './ind/main/main.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';

import { UserhomeComponent } from './user/userhome/userhome.component';

const routes: Routes = [
  {path:'',redirectTo:"main",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"reset",component:ResetComponent},
  {path:"resetPassword",component: ResetPasswordComponent},
  {path:"famous",component:FamousComponent},
  {path:"main",component:MainComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"add", component:AddPizzaComponent},
  {path:"viewpizza",component:ViewPizzaComponent},
  {path:"viewuser",component:ViewUserComponent},
  {path:"userhome",component:UserhomeComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"my-profile",component:MyProfileComponent},
  // {path:"myProfile",component:MyProfileComponent},
  {path:"editprofile",component:EditProfileComponent},


  {path:"updateproduct",component:UpdateProductComponent},
  {path: "Products/:id/UpdateDetails",component: UpdateProductComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
