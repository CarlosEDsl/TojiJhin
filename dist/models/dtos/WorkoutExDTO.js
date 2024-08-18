"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutExDTO = void 0;
class WorkoutExDTO {
    constructor(exerciseId, id_workout, bench, repetitions, priority) {
        this.id_workout = id_workout || 0;
        this.bench = bench || 0;
        this.repetitions = repetitions || '';
        this.priority = priority || 0;
        this.exerciseId = exerciseId;
    }
}
exports.WorkoutExDTO = WorkoutExDTO;
