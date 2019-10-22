export class Materiaal {
  // tslint:disable: variable-name
  private _id: number;

  constructor(
      private _icoon: string,
      private _naam: string,
      private _omschrijving: string,
      private _prijs: number
  ) {}

  static fromJSON(json: any): Materiaal {
      const obj = new Materiaal(
          json.icoon,
          json.materiaalNaam,
          json.beschrijving,
          json.prijs
      );
      obj._id = json.moduleMateriaalId;
      return obj;
  }

  public toJSON(): any {
    return {
        materiaalId: this._id,
        materiaalNaam: this._naam,
        prijs: this._prijs,
        beschrijving: this._omschrijving,
        icoon: this._icoon
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
}