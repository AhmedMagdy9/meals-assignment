import { Component } from '@angular/core';
import { ChildteamComponent } from "../childteam/childteam.component";

@Component({
  selector: 'app-team',
  imports: [ChildteamComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  istrue:boolean = false

}
