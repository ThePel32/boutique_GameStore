import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasketComponent } from './basket/basket.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    CardListComponent,
    ShopComponent,
    MyAccountComponent,
    DashboardComponent,
    BasketComponent,
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
