export class ExerciseDTO{
    id_workout?: number;
    bench: number;
    repetitions: number;
    priority: number;
    exerciseId:number;
    

    constructor(exerciseId:number, id_workout?:number, bench?:number, repetitions?:number, priority?: number) {
        this.id_workout = id_workout || 0;
        this.bench = bench || 0;
        this.repetitions = repetitions || 0;
        this.priority = priority || 0;
        this.exerciseId = exerciseId;
    }
}