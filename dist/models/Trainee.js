"use strict";
// src/models/Trainee.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainee = void 0;
class Trainee {
    constructor(id, name, age, address, cell, description) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._address = address;
        this._cell = cell;
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
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get cell() {
        return this._cell;
    }
    set cell(value) {
        this._cell = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
exports.Trainee = Trainee;
