import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() public teams: Team[]

  constructor() { }

  ngOnInit() {
  }

}
