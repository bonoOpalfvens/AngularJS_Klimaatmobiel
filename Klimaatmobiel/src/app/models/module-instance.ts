import { Materiaal } from './materiaal';
import { KlimModule } from './klim-module';
import { Team } from './team';
import { Bestelling } from './bestelling';
import { ModuleInstanceStatus } from './module-instance-status';

export class ModuleInstance {
    private _id: number;
    private _moduleInstanceStatus: ModuleInstanceStatus;

    constructor(
        private _klimModule: KlimModule,
        private _teams: Team[],
        private _bestellingen: Bestelling[]
    ) {}

    static fromJSON(json: any): ModuleInstance {
        const inst = new ModuleInstance(
            KlimModule.fromJSON(json.module),
            json.teams.map(t => Team.fromJSON(t)),
            json.bestellingen.map(b => Bestelling.fromJSON(b)),
        );
        inst._id = json.moduleInstanceId;
        inst._moduleInstanceStatus = json.moduleInstanceStatus;
        return inst;
    }

    public toJSON(): any {
        return {
            moduleInstanceId: this._id,
            moduleId: this._klimModule.id,
            aantalTeams: this._teams.length
        };
    }

    get id(): number {
        return this._id;
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
}
