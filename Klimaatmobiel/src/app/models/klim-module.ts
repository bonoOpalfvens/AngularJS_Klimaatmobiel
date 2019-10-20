import { ModuleMateriaal } from './module-materiaal';

export class KlimModule {

    private _id: number;
    private _creationDate: Date;

    constructor(
        private _moduleNaam: string,
        private _standaardBudget: number,
        private _duurInMinuten: number,
        private _beschrijving: string,
        private _moduleMaterialen : ModuleMateriaal[]    
    ) {}


    static fromJSON(json: any): KlimModule {
        const klim = new KlimModule(
            json.moduleNaam,
            json.standaardBudget,
            json.duurInMinuten,
            json.beschrijving,
            json.moduleMaterialen.map(ModuleMateriaal.fromJSON)
        );
        klim._id = json.moduleId;
        klim._creationDate = json.creationDate;
        return klim;
    }

    toJSON(): any {
        return {
          moduleNaam: this._moduleNaam,
          standaardBudget: this._standaardBudget,
          duurInMinuten: this._duurInMinuten,
          beschrijving: this._beschrijving,
          moduleMaterialen: this._moduleMaterialen.map(m => m.toJSON())
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

    get moduleMaterialen() : ModuleMateriaal[] {
        return this._moduleMaterialen;
    }
}