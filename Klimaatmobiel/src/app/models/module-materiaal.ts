import { Materiaal } from './materiaal';

export class ModuleMateriaal {
    private _id: number;

    constructor(
        private _materiaal: Materiaal,
        private _prijs : number,
        private _aantalInStock : number
    ) {}

    static fromJSON(json: any): ModuleMateriaal {
        const mm = new ModuleMateriaal(
            Materiaal.fromJSON(json.materiaal),
            json.prijs,
            json.aantalInStock
        );
        mm._id = json.moduleMateriaalId;
        return mm;
    }

    toJSON(): any {
        return {
          materiaalId: this._materiaal.id,
          prijs: this._prijs,
          aantalInStock: this._aantalInStock
        };
      }

    get id(): number {
        return this._id;
    }

    get materiaal() : Materiaal {
        return this._materiaal;
    }

    get prijs() : number {
        return this._prijs;
    }

    get aantalInStock() : number {
        return this._aantalInStock;
    }
}