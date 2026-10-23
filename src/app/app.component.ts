import { Component } from "@angular/core";
import { PageTeamComponent } from "./pages/team/team.page";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageTeamComponent],
  template: `<app-page-team></app-page-team>`
})

export class AppComponent {}