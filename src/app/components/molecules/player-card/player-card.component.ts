import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css'
})
export class PlayerCardComponent {
  @Input({ required: true }) player!: Player;
  @Input() selected = false;
  @Output() cardClick = new EventEmitter<Player>();
}
