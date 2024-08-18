"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutEx = void 0;
class WorkoutEx {
    constructor(id_workout, exerciseId, bench, repetitions, priority) {
        this._exerciseId = exerciseId;
        this._bench = bench;
        this._repetitions = repetitions;
        this._id_workout = id_workout;
        this._priority = priority;
    }
    get exercise() {
        return this._exerciseId;
    }
    set exercise(value) {
        this._exerciseId = this.exercise;
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
    get id_workout() {
        return this._id_workout;
    }
    set id_workout(value) {
        this._id_workout = value;
    }
}
exports.WorkoutEx = WorkoutEx;
