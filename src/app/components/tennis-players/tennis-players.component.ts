import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-tennis-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tennis-players.component.html',
  styleUrls: ['./tennis-players.component.scss']
})
export class TennisPlayersComponent {
  @Input() players: Player[] = []; // Le tableau de joueurs reçu en entrée
}
