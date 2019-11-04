import { Materiaal } from './materiaal';

export class KlimModule {
    private _id: number;
    private _creationDate: Date;

    constructor(
        private _moduleNaam: string,
        private _standaardBudget: number,
        private _duurInMinuten: number,
        private _beschrijving: string,
        private _materialen: Materiaal[]
    ) { }

    static fromJSON(json: any): KlimModule {
        const klim = new KlimModule(
            json.moduleNaam,
            json.standaardBudget,
            json.duurInMinuten,
            json.beschrijving,
            (json.moduleMaterialen ? json.moduleMaterialen.map(Materiaal.fromJSON) : [])
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

    set id(val: number) {
        this._id = val;
    }

    get standaardBudget(): number {
        return this._standaardBudget;
    }

    set standaardBudget(val: number) {
        this._standaardBudget = val;
    }

    get duurInMinuten(): number {
        return this._duurInMinuten;
    }

    set duurInMinuten(val: number) {
        this._duurInMinuten = val;
    }

    get moduleNaam(): string {
        return this._moduleNaam;
    }

    set moduleNaam(val: string) {
        this._moduleNaam = val;
    }

    get beschrijving(): string {
        return this._beschrijving;
    }

    set beschrijving(val: string) {
        this._beschrijving = val;
    }

    get materialen(): Materiaal[] {
        return this._materialen;
    }

    set materialen(val: Materiaal[]) {
        this._materialen = val;
    }

    get creationDate(): Date {
        return this._creationDate;
    }








}
