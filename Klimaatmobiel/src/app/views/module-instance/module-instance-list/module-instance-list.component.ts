import { Component, OnInit, Input } from '@angular/core';
import { ModuleInstance } from 'src/app/models/module-instance';
import { Observable } from 'rxjs';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-instance-list',
  templateUrl: './module-instance-list.component.html',
  styleUrls: ['./module-instance-list.component.css']
})
export class ModuleInstanceListComponent implements OnInit {

  public fetchModuleInstances$: Observable<ModuleInstance[]> = this._dataService.moduleInstances$;
  public moduleInstances: ModuleInstance[] = []

  constructor(
    private _dataService: DataService,
    private _router: Router) { }

  ngOnInit() {
    this.fetchModuleInstances$.subscribe(m => this.moduleInstances = m);
  }

}
