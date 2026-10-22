import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component';

import { FormsModule } from '@angular/forms';
import { PLAYERS } from './app.players';
import { PlayerFilterPipe } from './player-filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    PlayersComponent,
    DetailComponent,
    MediaComponent,
    FormsModule,
    PlayerFilterPipe
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ctrlZ_producto1';

  players = PLAYERS;

  searchText = '';

  filterType = 'nombre';

  get filteredPlayers() {

    return this.players.filter(player => {

      const texto = this.searchText.toLowerCase();

      if (this.filterType === 'nombre') {
        return player.nombre.toLowerCase().includes(texto);
      }

      if (this.filterType === 'apellido') {
        return player.apellido.toLowerCase().includes(texto);
      }

      if (this.filterType === 'posicion') {
        return player.posicion.toLowerCase().includes(texto);
      }

      if (this.filterType === 'edad') {
        return player.edad.toString().includes(texto);
      }

      return true;

    });

  }

  limpiarFiltros() {

    this.searchText = '';
    this.filterType = 'nombre';

  }

}