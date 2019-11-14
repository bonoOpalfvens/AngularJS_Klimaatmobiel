import { Component, OnInit, Inject } from '@angular/core';
import { Bestelling } from 'src/app/models/bestelling';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bestelling-list',
  templateUrl: './bestelling-list.component.html',
  styleUrls: ['./bestelling-list.component.css']
})
export class BestellingListComponent implements OnInit {

  public bestellingen: Bestelling[]
  public teamNaam: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.bestellingen = data.bestellingen;
    this.teamNaam = data.teamNaam;
  }

  ngOnInit() {
  }

}
