import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-player-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-media.component.html',
  styleUrl: './player-media.component.css'
})
export class PlayerMediaComponent {

  @Input() player: Player | null = null;

}
