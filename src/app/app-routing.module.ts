import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { ShopingComponent } from './shoping/shoping.component';

const routes: Routes = [
  {path: "cart", component: CartComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "nav", component: NavComponent},
  {path: "register", component: RegisterComponent},
  {path: "shoping", component: ShopingComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CartComponent, HomeComponent, LoginComponent, NavComponent, RegisterComponent, ShopingComponent]
