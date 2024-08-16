export class WorkoutDTO {
    id?: number;
    name: string;
    finishDate?: Date;
    description?: string;
    id_trainee: number;
    id_personal: number;

    constructor(id?: number, name?: string, finishDate?: Date, description?: string, id_trainee?: number, id_personal?: number) {
      this.id = id;
      this.name = name || '';
      this.finishDate = finishDate;
      this.description = description || '';
      this.id_trainee = id_trainee || 0;
      this.id_personal = id_personal || 0;
    }
}