import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { KlimModule } from 'src/app/models/klim-module';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-klim-module-list',
  templateUrl: './klim-module-list.component.html',
  styleUrls: ['./klim-module-list.component.css']
})
export class KlimModuleListComponent implements OnInit {

  private _fetchKlimModules$: Observable<KlimModule[]> = this._dataService.klimModules$;
  public klimModules : KlimModule[];

  constructor(
    private _dataService: DataService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._fetchKlimModules$
    .pipe()
    .subscribe(m => this.klimModules = m);
  }
}
