import { Eigenschap } from './eigenschap';
import { Eenheid } from './eenheid';

export class Materiaal {
    // tslint:disable: variable-name
    private _id: number;
    private _eigenschappen: Eigenschap[] = [];
    private _eenheid: Eenheid;

    constructor(
        private _icoon: string,
        private _naam: string,
        private _omschrijving: string,
        private _prijs: number,
        private _klimaatScore: number
    ) { }

    static fromJSON(json: any): Materiaal {
        const obj = new Materiaal(
            json.icoon,
            json.materiaalNaam,
            json.beschrijving,
            json.prijs,
            json.klimaatScore,
        );
        obj._id = json.moduleMateriaalId;
        obj._eigenschappen = json.materiaal.eigenschappen.map(Eigenschap.fromJSON);
        obj._eenheid = json.eenheid;
        return obj;
    }

    public toJSON(): any {
        return {
            materiaalId: this._id,
            materiaalNaam: this._naam,
            prijs: this._prijs,
            beschrijving: this._omschrijving,
            icoon: this._icoon,
            eigenschappen: this._eigenschappen.map(e => e.toJSON()),
            eenheid: this._eenheid,
            klimaatScore: this._klimaatScore
        };
    }

    get id(): number {
        return this._id;
    }

    get icoon(): string {
        return this._icoon;
    }

    get naam(): string {
        return this._naam;
    }

    get omschrijving(): string {
        return this._omschrijving;
    }

    get prijs(): number {
        return this._prijs;
    }

    get eigenschappen(): Eigenschap[] {
        return this._eigenschappen;
    }

    get eenheid(): Eenheid {
        return this._eenheid;
    }

    set eenheid(val: Eenheid) {
        this._eenheid = val;
    }

    get klimaatScore(): number {
        return this._klimaatScore;
    }

    set klimaatScore(val: number) {
        this._klimaatScore = val;
    }
}
