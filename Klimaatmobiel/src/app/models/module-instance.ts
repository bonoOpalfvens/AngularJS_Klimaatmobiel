import { Materiaal } from './materiaal';
import { KlimModule } from './klim-module';
import { Team } from './team';
import { Bestelling } from './bestelling';
import { ModuleInstanceStatus } from './module-instance-status';

export class ModuleInstance {
    private _id: number;
    private _moduleInstanceStatus: ModuleInstanceStatus;
    private _teams: Team[];
    private _bestellingen: Bestelling[];
    private _startDatum: Date;
    private _eindDatum: Date;
    private _code: string;

    constructor(
        private _klimModule: KlimModule,
        private _aantalTeams: number
    ) { }

    static fromJSON(json: any): ModuleInstance {
        const inst = new ModuleInstance(
            KlimModule.fromJSON(json.module),
            json.aantalTeams
        );
        inst._id = json.moduleInstanceId;
        inst._moduleInstanceStatus = json.moduleInstanceStatus;
        inst._teams = json.teams.map(Team.fromJSON);
        inst._bestellingen = json.bestellingen.map(Bestelling.fromJSON);
        inst._startDatum = json.startDatum;
        inst._eindDatum = json.eindDatum;
        return inst;
    }

    public toJSON(): any {
        return {
            moduleInstanceId: this._id,
            moduleId: this._klimModule.id,
            aantalTeams: this._aantalTeams
        };
    }

    get id(): number {
        return this._id;
    }

    get aantalTeams(): number {
        return this._aantalTeams;
    }

    set aantalTeams(val: number) {
        this._aantalTeams = val;
    }

    get startDatum(): Date {
        return this._startDatum;
    }

    get eindDatum(): Date {
        return this._eindDatum;
    }

    get bestellingen(): Bestelling[] {
        return this._bestellingen;
    }

    set bestellingen(val: Bestelling[]) {
        this._bestellingen = val;
    }

    get teams(): Team[] {
        return this._teams;
    }

    set teams(val: Team[]) {
        this._teams = val;
    }

    get moduleInstanceStatus(): ModuleInstanceStatus {
        return this._moduleInstanceStatus;
    }

    set moduleInstanceStatus(val: ModuleInstanceStatus) {
        this._moduleInstanceStatus = val;
    }

    get statusString(): string {
        return ModuleInstanceStatus[this._moduleInstanceStatus];
    }

    get klimModule(): KlimModule {
        return this._klimModule;
    }

    set klimModule(val: KlimModule) {
        this._klimModule = val;
    }
}
