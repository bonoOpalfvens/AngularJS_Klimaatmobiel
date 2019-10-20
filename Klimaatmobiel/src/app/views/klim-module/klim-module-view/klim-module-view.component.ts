import { Component, OnInit, Input } from '@angular/core';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-klim-module-view',
  templateUrl: './klim-module-view.component.html',
  styleUrls: ['./klim-module-view.component.css']
})
export class KlimModuleViewComponent implements OnInit {

  @Input() public klimModule: KlimModule;

  constructor(private _dataService: DataService) { }

  ngOnInit() {}
}
