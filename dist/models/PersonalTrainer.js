"use strict";
// src/models/PersonalTrainer.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalTrainer = void 0;
class PersonalTrainer {
    constructor(name, address, cell, id) {
        this._id = id || 0;
        this._name = name;
        this._address = address;
        this._cell = cell;
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
}
exports.PersonalTrainer = PersonalTrainer;
