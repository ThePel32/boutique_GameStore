import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasketComponent } from './basket/basket.component';
import { CardListComponent } from './components/card-list/card-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cardList', component: CardListComponent },
  { path: 'store', component: ShopComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basket', component: BasketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
