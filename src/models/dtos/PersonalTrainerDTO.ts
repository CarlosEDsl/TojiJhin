export class PersonalTrainerDTO {
    id?: number;
    name: string;
    address: string;
    cell: string;

    constructor(id?: number, name?: string, address?: string, cell?: string) {
        this.id = id;
        this.name = name || '';
        this.address = address || '';
        this.cell = cell || '';
      }
}