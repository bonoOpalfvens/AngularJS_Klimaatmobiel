import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  @Input() public team: Team;
  public backgroundColor: string;

  constructor() { }

  ngOnInit() {
    const randomColor: number = Math.round(Math.random() * 15 + 1);
    switch (randomColor) {
      case 1: this.backgroundColor = '#2ECC40';
              break;
      case 2: this.backgroundColor = '#7FDBFF';
              break;
      case 3: this.backgroundColor = '#fff3a5';
              break;
      case 4: this.backgroundColor = '#FFDC00';
              break;
      case 5: this.backgroundColor = '#FF4136';
              break;
      case 6: this.backgroundColor = '#ECD2C1';
              break;
      case 7: this.backgroundColor = '#E1CD94';
              break;
      case 8: this.backgroundColor = '#669b88';
              break;
      case 9: this.backgroundColor = '#64ba77';
              break;
      case 10: this.backgroundColor = '#a0c17f';
               break;
      case 11: this.backgroundColor = '#eaeaea';
               break;
      case 12: this.backgroundColor = '#b78bf4';
               break;
      case 13: this.backgroundColor = '#a389ff';
               break;
      case 14: this.backgroundColor = '#dca5ff';
               break;
      case 15: this.backgroundColor = '#ffa391';
               break;
    }
  }
}
