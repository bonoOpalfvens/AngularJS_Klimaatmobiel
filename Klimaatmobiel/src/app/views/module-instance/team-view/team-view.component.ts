import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TeamNotitiesDialogComponent } from '../team-notities-dialog/team-notities-dialog.component';

@Component({
        selector: 'app-team-view',
        templateUrl: './team-view.component.html',
        styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
        @Input() public team: Team;
        public backgroundColor: string;

        constructor(
                private _dataService: DataService,
                public dialog: MatDialog
        ) { }

        ngOnInit() {
                const colors = [
                        '#2ECC40', '#E1CD94', '#a389ff',
                        '#7FDBFF', '#669b88', '#dca5ff',
                        '#fff3a5', '#64ba77', '#ffa391',
                        '#FFDC00', '#a0c17f', '#b78bf4',
                        '#FF4136', '#eaeaea', '#ECD2C1'
                        ];
                const randomColor: number = Math.round(Math.random() * colors.length);
                this.backgroundColor = colors[randomColor];
        }
        addNotities() {
                const dialogConfig = new MatDialogConfig();

                dialogConfig.disableClose = true;
                dialogConfig.autoFocus = true;

                dialogConfig.data = {
                        notities: this.team.notities
                };
                const dialogRef = this.dialog.open(TeamNotitiesDialogComponent, dialogConfig);
                dialogRef.afterClosed().subscribe((result: string) => {
                        if (result) {
                                this.team.notities = result;
                                this._dataService.putTeam(this.team)
                                        .subscribe();
                        }
                });
        }
}
