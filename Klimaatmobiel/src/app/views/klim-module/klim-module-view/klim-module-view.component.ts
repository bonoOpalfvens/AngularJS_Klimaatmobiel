import { Component, OnInit, Input } from '@angular/core';
import { KlimModule } from 'src/app/models/klim-module';

@Component({
  selector: 'app-klim-module-view',
  templateUrl: './klim-module-view.component.html',
  styleUrls: ['./klim-module-view.component.css']
})
export class KlimModuleViewComponent implements OnInit {
  @Input() public klimModule: KlimModule;
  // tslint:disable-next-line: ban-types
  @Input() deleteFunc: Function;

  constructor( ) { }
  ngOnInit() {}
}
