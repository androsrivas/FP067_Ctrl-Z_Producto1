import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../models/player.model';
import { PlayerMediaComponent } from '../player-media/player-media.component';
import { StatCardComponent } from '../../atoms/stat-card/stat-card.component';


@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, PlayerMediaComponent, StatCardComponent],
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent {
  @Input() player: Player | null = null;
  @Output() closed = new EventEmitter<void>();

  get personalInfo(): { label: string; value: string |number }[] {
    if (!this.player) return [];
    return [
      { label: 'Posición', value: this.player.posicion },
      { label: 'Dorsal', value: this.player.dorsal },
      { label: 'Nacionalidad', value: this.player.nacionalidad },
      { label: 'Biografía', value: this.player.biografia }
    ]
  }

  close(): void {
    this.closed.emit();
  }
}