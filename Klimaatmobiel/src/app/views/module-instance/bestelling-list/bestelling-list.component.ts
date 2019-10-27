import { Component, OnInit, Input } from '@angular/core';
import { Bestelling } from 'src/app/models/bestelling';

@Component({
  selector: 'app-bestelling-list',
  templateUrl: './bestelling-list.component.html',
  styleUrls: ['./bestelling-list.component.css']
})
export class BestellingListComponent implements OnInit {

  @Input() public bestellingen: Bestelling[]

  constructor() { }

  ngOnInit() {
  }

}
