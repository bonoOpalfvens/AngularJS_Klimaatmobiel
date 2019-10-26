import { Component, OnInit, Input } from '@angular/core';
import { Bestelling } from 'src/app/models/bestelling';

@Component({
  selector: 'app-bestelling-view',
  templateUrl: './bestelling-view.component.html',
  styleUrls: ['./bestelling-view.component.css']
})
export class BestellingViewComponent implements OnInit {

  @Input() public bestelling: Bestelling

  

  constructor() { }

  ngOnInit() {
  }

}
