import { Bestelling } from './bestelling';

export class Team {

    private _id: number;
    

  constructor(
      private _teamNaam: string,
      private _score: number,
      private _budget: number,
      private _bestellingen: Bestelling[]
  ) {}

    static fromJSON(json: any): Team {
        const team = new Team(
            json.teamNaam,
            json.score,
            json.budget,
            json.bestellingen.map(Bestelling.fromJSON)
        );
        team._id = json.teamId
        return team
    }

    toJSON(): any {
        return {
            teamId: this._id,
            score: this._score,
            budget: this._budget
        };
    }

    get teamNaam(): string {
        return this._teamNaam
    }

    get score(): number {
        return this._score
    }
    
    get budget(): number {
        return this._budget
    }

    get bestellingen(): Bestelling[] {
        return this._bestellingen
    }
}