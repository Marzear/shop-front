import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { PayComponent } from './pay/pay.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShopRateComponent } from './shop-rate/shop-rate.component';
import { HeaderComponent } from './header/header.component';
import { BuylistComponent } from './buylist/buylist.component';
import { EditComponent } from './edit/edit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ChangepassComponent } from './changepass/changepass.component';

const routes: Routes = [
  {
    path: 'changepass/:token',
    component: ChangepassComponent
  },
  {
    path: 'forgetpass',
    component: ForgetpassComponent
  },
  {
    path: 'buylist',
    component: BuylistComponent
  },
  {
    path: 'shoprate/:kw',
    component: ShopRateComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shopsingle/:id',
    component: ShopSingleComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'changepassword',
    component: ChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
