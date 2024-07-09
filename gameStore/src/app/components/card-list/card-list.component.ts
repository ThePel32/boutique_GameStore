import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameCardComponent } from '../game-card/game-card.component';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    GameCardComponent,
    CommonModule
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit{
  constructor(private gameService: GameService){
  }

  gameCards: Game[] = [];
  ngOnInit(): void {
    this.gameService.getAllGames().pipe(
      map(gameCards => this.gameCards = gameCards)
    ).subscribe();
  }
}
