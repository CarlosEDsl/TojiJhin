import { Exercise } from './../Exercise';
export class ExerciseDTO{
    id?: number;
    name: string;
    description: string;


    constructor(id?:number, name?:string, description?:string) {
        this.id = id;
        this.name = name || '';
        this.description = description || '';
    }
}