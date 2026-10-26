import { Component } from '@angular/core';
import { PlayersListComponent } from '../../components/organisms/players-list/players-list.component';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [PlayersListComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  selectedPlayer: Player | null = null;
}
