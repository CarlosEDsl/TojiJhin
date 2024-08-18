"use strict";
// src/models/Exercise.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(name, description, id) {
        this._id = id || 0;
        this._name = name;
        this._description = description;
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
}
exports.Exercise = Exercise;
