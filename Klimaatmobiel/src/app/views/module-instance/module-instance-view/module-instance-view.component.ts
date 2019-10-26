import { Component, OnInit, Input } from '@angular/core';
import { ModuleInstance } from 'src/app/models/module-instance';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-module-instance-view',
  templateUrl: './module-instance-view.component.html',
  styleUrls: ['./module-instance-view.component.css']
})
export class ModuleInstanceViewComponent implements OnInit {

  @Input() public moduleInstance: ModuleInstance
  
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    
  }

  OnDashboard() {
    
  }

}
