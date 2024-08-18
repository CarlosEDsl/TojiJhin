export class WorkoutExDTO{
    workoutId: number;
    bench: number;
    repetitions: string;
    priority: number;
    exerciseId:number;
    

    constructor(exerciseId:number, workoutId?:number, bench?:number, repetitions?:string, priority?: number) {
        this.workoutId = workoutId || 0;
        this.bench = bench || 0;
        this.repetitions = repetitions || '';
        this.priority = priority || 0;
        this.exerciseId = exerciseId;
    }
}