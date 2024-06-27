import { Component, Input, OnInit } from '@angular/core';
import { GameCard } from '../../models/game-card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent implements OnInit{
  @Input() gameCard!: GameCard;

  saleButtonText!: string;

  ngOnInit(): void {
    this.saleButtonText = 'Reserver';
  }

  onAddsave(): void{
    if (this.gameCard.save){
      this.saleButtonText = 'Réserver';
      this.gameCard.save = false;
    }else {
      this.saleButtonText = 'Réservé !'
      this.gameCard.save = true;
    }
  }
}
