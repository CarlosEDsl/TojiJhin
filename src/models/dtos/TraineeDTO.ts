export class TraineeDTO {
    id?: number;
    name: string;
    age: number;
    address: string;
    cell: string;
    description: string;
  
    constructor(id?: number, name?: string, age?: number, address?: string, cell?: string, description?: string) {
      this.id = id || 0;
      this.name = name || '';
      this.age = age || 0;
      this.address = address || '';
      this.cell = cell || '';
      this.description = description || '';
    }
}