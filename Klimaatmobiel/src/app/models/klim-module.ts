import { Materiaal } from './materiaal';

export class KlimModule {
    // tslint:disable: variable-name
    private _id: number;
    private _creationDate: Date;

    constructor(
        private _moduleNaam: string,
        private _standaardBudget: number,
        private _duurInMinuten: number,
        private _beschrijving: string,
        private _materialen: Materiaal[]
    ) {}


    static fromJSON(json: any): KlimModule {
        const klim = new KlimModule(
            json.moduleNaam,
            json.standaardBudget,
            json.duurInMinuten,
            json.beschrijving,
            json.moduleMaterialen.map(Materiaal.fromJSON)
        );
        klim._id = json.moduleId;
        klim._creationDate = json.creationDate;
        return klim;
    }

    public toJSON(): any {
        return {
            moduleId: this._id,
            moduleNaam: this._moduleNaam,
            standaardBudget: this._standaardBudget,
            duurInMinuten: this._duurInMinuten,
            beschrijving: this._beschrijving,
            materialen: this._materialen.map(o => o.toJSON())
        };
    }

    get id(): number {
        return this._id;
    }

    get standaardBudget(): number {
        return this._standaardBudget;
    }
    get duurInMinuten(): number {
        return this._duurInMinuten;
    }

    get moduleNaam(): string {
        return this._moduleNaam;
    }

    public get beschrijving(): string {
        return this._beschrijving;
    }

    get materialen(): Materiaal[] {
        return this._materialen;
    }
}
