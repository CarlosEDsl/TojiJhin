"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutEx = void 0;
class WorkoutEx {
    constructor(workoutId, exerciseId, bench, repetitions, priority) {
        this._exerciseId = exerciseId;
        this._bench = bench;
        this._repetitions = repetitions;
        this._workoutId = workoutId;
        this._priority = priority;
    }
    get exerciseId() {
        return this._exerciseId;
    }
    set exerciseId(value) {
        this._exerciseId = this.exerciseId;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    get bench() {
        return this._bench;
    }
    set bench(value) {
        this._bench = value;
    }
    get repetitions() {
        return this._repetitions;
    }
    set repetitions(value) {
        this._repetitions = value;
    }
    get workoutId() {
        return this._workoutId;
    }
    set workoutId(value) {
        this._workoutId = value;
    }
}
exports.WorkoutEx = WorkoutEx;
