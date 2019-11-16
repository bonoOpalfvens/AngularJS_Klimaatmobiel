import { Component, OnInit, Input } from '@angular/core';
import { Bestelling } from 'src/app/models/bestelling';
import { BestellingStatus } from 'src/app/models/bestelling-status';
import { Team } from 'src/app/models/team';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bestelling-view',
  templateUrl: './bestelling-view.component.html',
  styleUrls: ['./bestelling-view.component.css']
})
export class BestellingViewComponent implements OnInit {

  @Input() public bestelling: Bestelling
  @Input() public team: Team

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  get bestellingStatus() {
    return BestellingStatus;
  }

  acceptOrder() {
    this.bestelling.bestellingStatus = BestellingStatus.ACCEPTED;
    console.log(this.team);
    this._dataService.putTeam(this.team);
  }

  declineOrder() {
    this.bestelling.bestellingStatus = BestellingStatus.REJECTED;
    this._dataService.putTeam(this.team);
  }
}
