import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {
  public currentPlayer = new Player();

  @Output() addPlayer = new EventEmitter<Player>();

  public onSubmit() {
    this.addPlayer.emit(this.currentPlayer); // Émet le joueur actuel à AppComponent
    this.currentPlayer = new Player(); // Réinitialise le joueur courant
  }
}
