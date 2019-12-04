import { Component, OnInit, Inject } from '@angular/core';
import { Bestelling } from 'src/app/models/bestelling';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-bestelling-list',
  templateUrl: './bestelling-list.component.html',
  styleUrls: ['./bestelling-list.component.css']
})
export class BestellingListComponent implements OnInit {

  public team: Team;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.team = data.team;
  }

  ngOnInit() {
  }

}
