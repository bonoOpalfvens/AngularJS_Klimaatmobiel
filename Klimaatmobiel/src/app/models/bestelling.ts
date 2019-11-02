import { BestellingStatus } from './bestelling-status';
import { OrderLine } from './order-line';

export class Bestelling {

    private _id: number;

    constructor(
        private _bestellingStatus: BestellingStatus,
        private _orderLines: OrderLine[],
        private _prijs: number
    ) { }

    static fromJSON(json: any) {
        const bestelling = new Bestelling(
            json.bestellingStatus,
            json.orderLines.map(OrderLine.fromJSON),
            json.prijs
        );
        bestelling._id = json.bestellingId
        return bestelling
    }

    toJSON(): any {
        return {
            bestellingId: this._id,
            bestellingStatus: this._bestellingStatus
        };
    }

    get bestellingStatus(): BestellingStatus {
        return this._bestellingStatus;
    }

    get id(): number {
        return this._id;
    }

    get orderLines(): OrderLine[] {
        return this._orderLines;
    }

    get statusString(): string {
        return BestellingStatus[this._bestellingStatus]
    }

    get prijs(): number {
        return this._prijs;
    }
}