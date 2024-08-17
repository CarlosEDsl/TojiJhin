export class PersonalTrainerDTO {
    id?: number;
    name: string;
    address: string;
    cell: number;

    constructor(id?: number, name?: string, address?: string, cell?: number) {
        this.id = id;
        this.name = name || '';
        this.address = address || '';
        this.cell = cell || 0;
      }
}