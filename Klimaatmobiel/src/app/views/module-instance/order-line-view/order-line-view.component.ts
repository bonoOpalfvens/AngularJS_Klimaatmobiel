import { Component, OnInit, Input } from '@angular/core';
import { OrderLine } from 'src/app/models/order-line';

@Component({
  selector: 'app-order-line-view',
  templateUrl: './order-line-view.component.html',
  styleUrls: ['./order-line-view.component.css']
})
export class OrderLineViewComponent implements OnInit {

  @Input() public orderLine: OrderLine

  constructor() { }

  ngOnInit() {
  }

}
