import { Component, OnInit, Input } from '@angular/core';
import { ModuleInstance } from 'src/app/models/module-instance';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instance-dashboard',
  templateUrl: './instance-dashboard.component.html',
  styleUrls: ['./instance-dashboard.component.css']
})
export class InstanceDashboardComponent implements OnInit {

  public instance: ModuleInstance

  constructor(
    private _router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.instance = item.instance
    );
  }

}
