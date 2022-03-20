import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppServiceModule } from './app.service.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePAgeComponent,
    HeaderComponent,
    FooterComponent,
    SideCartComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
