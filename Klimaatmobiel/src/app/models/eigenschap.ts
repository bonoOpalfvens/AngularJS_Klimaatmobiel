export class Eigenschap {
    private _id: number;

    constructor(
        private _eigenschapNaam: string,
        private _icoon: string
    ) { }

    static fromJSON(json: any): Eigenschap {
        const eig = new Eigenschap(
            json.eigenschapNaam,
            json.icoon
        );
        eig._id = json.eigenschapId;
        return eig;
    }

    toJSON(): any {
        return {
            eigenschapId: this._id,
            eigenschapNaam: this._eigenschapNaam,
            icoon: this._icoon
        };
    }

    get id(): number {
        return this._id;
    }

    get icoon(): string {
        return this._icoon;
    }

    get eigenschapNaam(): string {
        return this._eigenschapNaam;
    }
}
