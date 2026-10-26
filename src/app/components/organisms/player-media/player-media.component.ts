import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-media',
  standalone: true,
  imports: [],
  templateUrl: './player-media.component.html',
  styleUrl: './player-media.component.css'
})
export class PlayerMediaComponent {
  @Input() videoUrl?: string;
  @Input() descripcion?: string;
  @Input() totalVideos: number = 1;

  @Output() play = new EventEmitter<string>();

  onPlay(): void {
    if (this.videoUrl) {
      this.play.emit(this.videoUrl);
    }
  }
}
