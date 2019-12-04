import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/team';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TeamNotitiesDialogComponent } from '../team-notities-dialog/team-notities-dialog.component';
import { BestellingStatus } from 'src/app/models/bestelling-status';
import { TeamBudgetDialogComponent } from '../team-budget-dialog/team-budget-dialog.component';
import { BestellingListComponent } from '../bestelling-list/bestelling-list.component';

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
                /*const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

                const randomColor: number = Math.round(Math.random() * colors.length);*/
                this.backgroundColor = '#1A1A1D';
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


        editBudget() {
                const dialogConfig = new MatDialogConfig();

                dialogConfig.disableClose = true;
                dialogConfig.autoFocus = true;

                dialogConfig.data = {
                        budget: this.team.budget
                };
                const dialogRef = this.dialog.open(TeamBudgetDialogComponent, dialogConfig);
                dialogRef.afterClosed().subscribe((result: number) => {
                        if (result) {
                                this.team.budget = result;
                                this._dataService.putTeam(this.team).subscribe();
                        }
                })
        }

        checkBestellingen() {
                const dialogConfig = new MatDialogConfig();

                dialogConfig.disableClose = false;

                dialogConfig.data = {
                        bestellingen: this.team.bestellingen, team: this.team
                };

                const dialogRef = this.dialog.open(BestellingListComponent, dialogConfig);

        }

        get pendingLength(): number {
                return this.team.bestellingen.filter(b => (b.bestellingStatus === BestellingStatus.PENDING)).length;
        }
}
