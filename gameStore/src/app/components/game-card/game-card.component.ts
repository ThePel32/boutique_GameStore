import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game.model';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent implements OnInit{
  @Input() gameCard!: Game;

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
