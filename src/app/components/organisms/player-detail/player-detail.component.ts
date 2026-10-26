import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../models/player.model';
import { StatCardComponent } from '../../atoms/stat-card/stat-card.component';
import { PlayerMediaComponent } from '../player-media/player-media.component';


export interface InfoItem {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule, PlayerMediaComponent, StatCardComponent],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})
export class PlayerDetailComponent {
  @Input() player: Player | null = null;
  @Output() videoClicked = new EventEmitter<string>();

  get personalInfo(): InfoItem[] {
    if (!this.player) return [];

    return [
      { label: 'Edad', value: `${this.player.edad} años`},
      { label: 'Altura', value: `${this.player.altura} m`},
      { label: 'Nacionalidad', value: this.player.nacionalidad }
    ];
  }

  onPlayVideo(url: string): void {
    this.videoClicked.emit(url);
  }
}
