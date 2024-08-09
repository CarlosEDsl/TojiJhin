"use strict";
// src/models/Exercise.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(id, name, description, bench, repetitions, id_workout) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._bench = bench;
        this._repetitions = repetitions;
        this._id_workout = id_workout;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
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
exports.Exercise = Exercise;
