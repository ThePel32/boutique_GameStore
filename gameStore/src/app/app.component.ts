import { Game } from './models/game.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HeaderComponent } from './components/template/header/header.component'; 
import { FooterComponent } from './components/template/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    SidenavComponent,
    CardListComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myGames!: Game[];

  ngOnInit(): void {
    
  }
}
