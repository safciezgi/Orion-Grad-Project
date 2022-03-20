import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'welcomePage', component:WelcomePAgeComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  // {path:'products/:productPrice', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'search/:searchTerm', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'productDetail/:id', component:ProductDetailComponent, canActivate:[AuthGuard]},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
