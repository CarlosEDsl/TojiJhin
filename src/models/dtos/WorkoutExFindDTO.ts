export class WorkoutExFindDTO {
    workoutId: number;
    exerciseId: number;

    constructor(workoutId: number, exerciseId:number) {
        this.exerciseId = exerciseId;
        this.workoutId = workoutId;
    }
}