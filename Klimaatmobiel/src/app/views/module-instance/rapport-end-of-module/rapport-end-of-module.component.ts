import { Component, OnInit } from '@angular/core';
import { ModuleInstance } from 'src/app/models/module-instance';
import { Router, ActivatedRoute } from '@angular/router';
import { ModuleInstanceStatus } from 'src/app/models/module-instance-status';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rapport-end-of-module',
  templateUrl: './rapport-end-of-module.component.html',
  styleUrls: ['./rapport-end-of-module.component.css']
})
export class RapportEndOfModuleComponent implements OnInit {
  public moduleInstance: ModuleInstance;

  constructor(
    private _router: Router,
    private _dataService: DataService,
    private route: ActivatedRoute) {} 

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.moduleInstance = item.moduleInstance
    );
    console.log(this.moduleInstance);
  }

}
