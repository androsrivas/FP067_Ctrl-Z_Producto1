
import { Component } from '@angular/core';
import { PlayersListComponent } from '../../components/organisms/players-list/players-list.component';
import { PlayerDetailComponent } from '../../components/organisms/player-detail/player-detail.component';
import { PlayerMediaComponent } from '../../components/organisms/player-media/player-media.component';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    PlayersListComponent,
    PlayerDetailComponent,
    PlayerMediaComponent
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  selectedPlayer: Player | null = null;
}
