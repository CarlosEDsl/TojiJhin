"use strict";
// src/models/Workout.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
class Workout {
    constructor(name, description, id_trainee, id_personal, finishDate, id) {
        this._id = id || 0;
        this._name = name || '';
        this._finishDate = finishDate;
        this._description = description || '';
        this._id_trainee = id_trainee || 0;
        this._id_personal = id_personal || 0;
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
    get finishDate() {
        return this._finishDate;
    }
    set finishDate(value) {
        this._finishDate = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get id_trainee() {
        return this._id_trainee;
    }
    set id_trainee(value) {
        this._id_trainee = value;
    }
    get id_personal() {
        return this._id_personal;
    }
    set id_personal(value) {
        this._id_personal = value;
    }
}
exports.Workout = Workout;
