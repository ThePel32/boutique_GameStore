import { Component, OnInit } from '@angular/core';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameCard } from './models/game-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GameCardComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  myGames!: GameCard[];
  myOtherGame!: GameCard;
  anAnotherGame!: GameCard;

  ngOnInit(): void {
    
    this.myGames = [{
      title: 'Balatro',
      description: 'Un eu de cartes stratégique, humoristique et très captivant',
      imageUrl: 'assets/Jeux/balatro/BalatroMini.jpg',
      save: false,
      isAvailable: true
    },
    {
      title: 'Dragon Dogma',
      description: 'Un jeu d\'action-RPG en monde ouvert',
      imageUrl: 'assets/Jeux/DragonDogma/dragonDogmaMini.jpg',
      save: false,
      isAvailable: false
    }, 
    {
      title: 'Final Fantasy VII',
      description: 'Remake d\'un grand classique',
      imageUrl: 'assets/Jeux/ff7/FF7RMini.jpg',
      save: false,
      isAvailable: true
    }];
  }
}