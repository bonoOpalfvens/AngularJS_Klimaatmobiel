import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  @Input() public team: Team

  constructor() { }

  ngOnInit() {
    console.log(this.team)
  }

}
