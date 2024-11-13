import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent {
  @Input() players: Player[] = []; // Reçoit la liste des joueurs du parent

  Over = output<string>();

  onOver(){
    this.Over.emit('test');
  }
}