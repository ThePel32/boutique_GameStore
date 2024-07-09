import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  
  homeButton: string = 'Accueil';
  gamePageButton: string = 'Liste des jeux';
  storeButton: string = 'Magasins';
  myAccountButton: string = 'Mon espace';
  dashboardButton: string = 'Tableau de bord';
  basketButton: string = 'Panier';

  currentContent: string = '';

  ngOnInit(): void {
      this.homeButton
      this.gamePageButton
      this.storeButton
      this.myAccountButton
      this.dashboardButton
      this.basketButton
  }

  changeContent(content: string): void {
    this.currentContent = content;
  }
}
