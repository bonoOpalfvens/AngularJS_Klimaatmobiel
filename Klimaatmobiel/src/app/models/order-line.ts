import { Materiaal } from './materiaal';

export class OrderLine {

    constructor(
        private _materiaal: Materiaal,
        private _aantal: number
    ) {}

    static fromJSON(json: any) {
        const orderLine = new OrderLine(
            Materiaal.fromJSON(json.moduleMateriaal),
            json.aantal
        );
        return orderLine
    }

    toJSON(): any {
    }

    get aantal(): number {
        return this._aantal
    }

    get materiaal(): Materiaal {
        return this._materiaal
    }
}