export class WorkoutExDTO{
    id_workout: number;
    bench: number;
    repetitions: string;
    priority: number;
    exerciseId:number;
    

    constructor(exerciseId:number, id_workout?:number, bench?:number, repetitions?:string, priority?: number) {
        this.id_workout = id_workout || 0;
        this.bench = bench || 0;
        this.repetitions = repetitions || '';
        this.priority = priority || 0;
        this.exerciseId = exerciseId;
    }
}