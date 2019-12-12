import { Bestelling } from './bestelling';

export class Team {
    private _id: number;

    constructor(
        private _teamNaam: string,
        private _score: number,
        private _budget: number,
        private _notities: string,
        private _bestellingen: Bestelling[]
    ) { }

    static fromJSON(json: any): Team {
        const team = new Team(
            json.teamNaam,
            json.score,
            json.budget,
            json.notities,
            json.bestellingen.map(Bestelling.fromJSON)
        );
        team._id = json.teamId;
        return team;
    }

    toJSON(): any {
        return {
            teamId: this._id,
            score: this._score,
            budget: this._budget,
            notities: this._notities
        };
    }

    get id(): number {
        return this._id;
    }

    get notities(): string {
        return this._notities;
    }

    set notities(val: string) {
        this._notities = val;
    }

    get teamNaam(): string {
        return this._teamNaam;
    }

    get score(): number {
        return this._score;
    }

    get budget(): number {
        return this._budget;
    }

    set budget(val: number){
        this._budget = val;
    }

    get bestellingen(): Bestelling[] {
        return this._bestellingen;
    }
}
