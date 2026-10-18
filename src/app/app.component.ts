import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PLAYERS } from './app.players';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ctrlZ_producto1';

  players = PLAYERS;

  searchText = '';

  get filteredPlayers() {

    return this.players.filter(player =>
      player.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.apellido.toLowerCase().includes(this.searchText.toLowerCase()) ||
      player.posicion.toLowerCase().includes(this.searchText.toLowerCase())
    );

  }

}