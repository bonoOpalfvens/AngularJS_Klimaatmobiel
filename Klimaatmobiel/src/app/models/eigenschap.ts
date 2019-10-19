export class Eigenschap {
    private _id: number;

    constructor(
        private _eigenschapNaam: string,
    ) {}

    static fromJSON(json: any): Eigenschap {
        const eig = new Eigenschap(
            json.eigenschapNaam,
        );
        eig._id = json.eigenschapId;
        return eig;
    }

    toJSON(): any {
        return {
          eigenschapId: this._id,
          eigenschapNaam: this._eigenschapNaam
        };
      }

    get id(): number {
        return this._id;
    }

    get eigenschapNaam() : string{
        return this._eigenschapNaam;
    }
}