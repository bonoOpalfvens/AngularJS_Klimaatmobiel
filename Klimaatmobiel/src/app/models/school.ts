export class School {
    constructor(
        private id: number,
        private name: string
    ) {}

    static fromJSON(json: any): School {
        return new School(
            json.schoolId,
            json.schoolNaam
        );
    }

    public get Id(): number {
        return this.id;
    }
    public get Name(): string {
        return this.name;
    }
}
