import { Component, OnInit, Input } from '@angular/core';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';
import { ModuleInstance } from 'src/app/models/module-instance';

import { MatDialog } from '@angular/material';
import { ModuleInstanceCreateDialogComponent } from '../module-instance-create-dialog/module-instance-create-dialog.component';

@Component({
  selector: 'app-klim-module-view',
  templateUrl: './klim-module-view.component.html',
  styleUrls: ['./klim-module-view.component.css']
})
export class KlimModuleViewComponent implements OnInit {
  @Input() public klimModule: KlimModule;
  // tslint:disable-next-line: ban-types
  @Input() deleteFunc: Function;

  constructor(
    private _dataService: DataService,
    public dialog: MatDialog
  ) { }
  ngOnInit() {}

  startModule(klimModule:KlimModule) {
    const dialogRef = this.dialog.open(ModuleInstanceCreateDialogComponent, {});
    dialogRef.afterClosed().subscribe((result: number) => {
      if (result) {
        const moduleInstance = new ModuleInstance(klimModule, result)
        
        this._dataService.postModuleInstance(moduleInstance)
          .subscribe();
      }
    });
  }
}
