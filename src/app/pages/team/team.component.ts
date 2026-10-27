
import { Component } from '@angular/core';
import { PlayersListComponent } from '../../components/organisms/players-list/players-list.component';
import { PlayerDetailComponent } from '../../components/organisms/player-detail/player-detail.component';
import { PlayerMediaComponent } from '../../components/organisms/player-media/player-media.component';
import { Player } from '../../models/player.model';
import { TeamLayoutComponent } from '../../components/templates/team-layout/team-layout.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    TeamLayoutComponent,
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
