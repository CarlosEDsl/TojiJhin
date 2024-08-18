"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutExDTO = void 0;
class WorkoutExDTO {
    constructor(exerciseId, workoutId, bench, repetitions, priority) {
        this.workoutId = workoutId || 0;
        this.bench = bench || 0;
        this.repetitions = repetitions || '';
        this.priority = priority || 0;
        this.exerciseId = exerciseId;
    }
}
exports.WorkoutExDTO = WorkoutExDTO;
