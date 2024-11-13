import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Player } from './models/player';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { TennisPlayersComponent } from './components/tennis-players/tennis-players.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, PlayerTableComponent, TennisPlayersComponent, PlayerFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 0;
  public players: Player[] = []; // Tableau pour les joueurs
  public showTable = false; // Propriété pour gérer l'affichage

  // Méthode pour incrémenter le compteur
  public onClick() {
    this.counter++;
  }

  // Méthode de rappel pour l'ajout de joueur depuis PlayerFormComponent
  public addPlayer(player: Player) {
    this.players.push(player);
  }

  // Méthode pour basculer entre l'affichage de la liste et du tableau
  public toggleDisplay() {
    this.showTable = !this.showTable;
  }

  public onOver(event: string) {
    console.log('Event reçu de PlayerTableComponent:', event);
  }
}