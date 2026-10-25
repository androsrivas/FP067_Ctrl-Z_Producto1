import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PLAYERS } from '../../app.players';
import { PlayerFilterPipe } from '../../player-filter.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    FormsModule,
    PlayerFilterPipe
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

  players = PLAYERS;

  searchText = '';

  filterType = 'nombre';

  limpiarFiltros() {

    this.searchText = '';
    this.filterType = 'nombre';

  }

}