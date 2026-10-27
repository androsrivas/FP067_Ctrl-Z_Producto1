
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})
export class PlayerDetailComponent {

  @Input() player: Player | null = null;

  @Output() closeDetail = new EventEmitter<void>();

  close(): void {
    this.closeDetail.emit();
  }
}
