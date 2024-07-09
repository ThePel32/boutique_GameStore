import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';

@Component({
  selector: 'app-shopcards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopcards.component.html',
  styleUrl: './shopcards.component.scss'
})
export class ShopcardsComponent implements OnInit{
  @Input() shopCard!: Shop;

  selectShopButton!: string;

  ngOnInit(): void {
    this.selectShopButton = "Selectionner";
  }

  onAddSelect(): void{
    if (this.shopCard.select){
      this.selectShopButton = 'Selectionner';
      this.shopCard.select = false;
    }else {
      this.selectShopButton = 'Selectionné !'
      this.shopCard.select = true;
    }
  }

}
