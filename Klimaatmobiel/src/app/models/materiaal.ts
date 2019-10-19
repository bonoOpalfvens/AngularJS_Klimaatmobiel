import { Eigenschap } from './eigenschap';

export class Materiaal {
    private _id: number;

    constructor(
        private _materiaalNaam: string,
        private _beschrijving: string,
        private _standaardPrijs: number,
        private _isTemplate : boolean,
        private _eigenschappen: Eigenschap[]
    ) {}

    static fromJSON(json: any): Materiaal {
        const mat = new Materiaal(
            json.materiaalNaam,
            json.beschrijving,
            json.standaardPrijs,
            json.isTemplate,
            json.eigenschappen.map(Eigenschap.fromJSON)
        );
        mat._id = json.materiaalId;
        return mat;
    }

    toJSON(): any {
        return {
          materiaalId: this._id,
          materiaalNaam: this._materiaalNaam,
          beschrijving: this._beschrijving,
          standaardPrijs: this._standaardPrijs,
          isTemplate: this._isTemplate,
          eigenschappen : this._eigenschappen.map(e => e.toJSON())
        };
      }

    get id(): number {
        return this._id;
    }

    get standaardPrijs(): number {
        return this._standaardPrijs;
    }
    get beschrijving(): string {
        return this._beschrijving;
    }

    get materiaalNaam(): string {
        return this._materiaalNaam;
    }

    get isTemplate() : boolean {
        return this._isTemplate;
    }

    get eigenschappen() : Eigenschap[] {
        return this._eigenschappen;
    }
}