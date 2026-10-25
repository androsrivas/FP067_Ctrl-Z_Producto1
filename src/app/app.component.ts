import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayersComponent,
    DetailComponent,
    MediaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ctrlZ_producto1';

  selectedPlayer: any = null;

  onPlayerSelected(player: any) {

    this.selectedPlayer = player;

  }

}