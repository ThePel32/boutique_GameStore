import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop.model';
import { ShopcardsComponent } from '../components/shopcards/shopcards.component';
import { CommonModule } from '@angular/common';
import { ShopService } from '../services/shop.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    ShopcardsComponent,
    CommonModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  constructor(private shopService: ShopService){
  }

  shopCards: Shop[] = [];
  ngOnInit(): void {
    this.shopService.getAllShop().pipe(
      map(shopCards => this.shopCards = shopCards)
    ).subscribe();
  }
}
