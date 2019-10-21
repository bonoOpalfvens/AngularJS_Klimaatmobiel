import { Eigenschap } from './eigenschap';

export class Materiaal {
    // tslint:disable: variable-name
  constructor(
    private _icoon: string,
    private _naam: string,
    private _prijs: number,
    private _omschrijving: string,
    private _id: number
  ) {}

  static fromJSON(json: any): Materiaal {
    return null;
}

toJSON(): any {
    return null;
  }
    public get icoon(): string {
      return this._icoon;
    }
    public set icoon(v: string) {
      this._icoon = v;
    }
    public get naam(): string {
      return this._naam;
    }
    public set naam(v: string) {
      this._naam = v;
    }
    public get prijs(): number {
      return this._prijs;
    }
    public set prijs(v: number) {
      this._prijs = v;
    }
    public get omschrijving(): string {
      return this._omschrijving;
    }
    public set omschrijving(v: string) {
      this._omschrijving = v;
    }
    public get id(): number {
      return this._id;
    }
    public set id(v: number) {
      this._id = v;
    }
}
