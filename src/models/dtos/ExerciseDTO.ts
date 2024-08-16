import { Exercise } from './../Exercise';
export class ExerciseDTO{
    id?: number;
    name: string;
    description: string;
    bench: number;
    repetitions: number;
    id_workout: number;

    constructor(id?:number, name?:string, description?:string, bench?:number, repetitions?:number, id_workout?:number) {
        this.id = id;
        this.name = name || '';
        this.description = description || '';
        this.bench = bench || 0;
        this.repetitions = repetitions || 0;
        this.id_workout = id_workout || 0;
    }
}