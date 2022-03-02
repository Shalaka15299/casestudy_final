import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';
import { ViewPizzaComponent } from './admin/view-pizza/view-pizza.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { CartComponent } from './user/cart/cart.component';
import { EmptyprofileComponent } from './user/emptyprofile/emptyprofile.component';
import { EmptycartComponent } from './user/emptycart/emptycart.component';
import { GlowComponent } from './user/glow/glow.component';
import { AdminserviceService } from './admin/service/adminservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { FamousComponent } from './ind/famous/famous.component';
import { HeaderComponent } from './ind/header/header.component';
import { MainComponent } from './ind/main/main.component';
import { OfferComponent } from './ind/offer/offer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './ind/footer/footer.component';

import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { ProductComponent } from './user/product/product.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { OrderComponent } from './user/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ResetPasswordComponent,
      AdminHeaderComponent,
    AdminHomeComponent,
    AddPizzaComponent,
    ViewPizzaComponent,
    ViewUserComponent,
    CartComponent,
    EmptyprofileComponent,
    EmptycartComponent,
    GlowComponent,
    UserhomeComponent,
    NavbarComponent,
    FamousComponent,
    HeaderComponent,
    MainComponent,
    OfferComponent,
    AdminLoginComponent,
    FooterComponent,

    UpdateProductComponent,
     CheckoutComponent,
     MyProfileComponent,
     ProductComponent,
     EditProfileComponent,
     OrderComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
