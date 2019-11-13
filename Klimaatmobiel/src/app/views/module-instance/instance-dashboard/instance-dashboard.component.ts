import { Component, OnInit, Input } from '@angular/core';
import { ModuleInstance } from 'src/app/models/module-instance';
import { Router, ActivatedRoute } from '@angular/router';
import { ModuleInstanceStatus } from 'src/app/models/module-instance-status';
import { DataService } from 'src/app/services/data.service';

import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-instance-dashboard',
  templateUrl: './instance-dashboard.component.html',
  styleUrls: ['./instance-dashboard.component.css']
})
export class InstanceDashboardComponent implements OnInit {

  public moduleInstance: ModuleInstance;
  public hours = 0;
  public minutes = 0;
  public seconds = 0;
  private interval: any;

  constructor(
    private _router: Router,
    private _dataService: DataService,
    private _snackBar: MatSnackBar,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.moduleInstance = item.moduleInstance
    );
    console.log(this.moduleInstance);
  }

  startModule() {
    this.startTimer();
    this.moduleInstance.moduleInstanceStatus = ModuleInstanceStatus.ACTIVE;
  }

  completeModule() {
    this.pauseTimer();
    this.moduleInstance.moduleInstanceStatus = ModuleInstanceStatus.COMPLETED;
    this.export();
  }

  cancelModule() {
    this.pauseTimer();
    this.moduleInstance.moduleInstanceStatus = ModuleInstanceStatus.CANCELLED;
    this.export();
  }

  exportModule(){
    this.export();
  }

  export(){
    this._dataService.postModuleInstance(this.moduleInstance)
      .subscribe(
        val => {
          if(val){
            this._router.navigate(['ModuleInstance/Dashboard/'.concat(JSON.parse(val).moduleInstanceId).concat('/CreateRapport')]);
            this._snackBar.open('Succes!', 'Sluit', {duration: 3000});
          }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open('Er was een probleem bij het exporteren van de module.', 'Sluit', {duration: 15000});
        }
      );
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.minutes === 60) {
        this.hours += 1;
        this.minutes = 0;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  createTeam() {
    this._dataService.createTeam(this.moduleInstance.id).subscribe(console.log);
  }

  get startable(): boolean {
    return this.moduleInstance.moduleInstanceStatus === ModuleInstanceStatus.PENDING;
  }

  get endable(): boolean {
    return this.moduleInstance.moduleInstanceStatus === ModuleInstanceStatus.ACTIVE;
  }

  get timeString() {
    let time = '';
    this.hours >= 10 ? time += this.hours : time += '0' + this.hours;
    time += ':';
    this.minutes >= 10 ? time += this.minutes : time += '0' + this.minutes;
    time += ':';
    this.seconds >= 10 ? time += this.seconds : time += '0' + this.seconds;
    return time;
  }
}
