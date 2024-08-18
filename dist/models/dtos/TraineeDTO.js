"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraineeDTO = void 0;
class TraineeDTO {
    constructor(id, name, age, address, cell, description) {
        this.id = id || 0;
        this.name = name || '';
        this.age = age || 0;
        this.address = address || '';
        this.cell = cell || 0;
        this.description = description || '';
    }
}
exports.TraineeDTO = TraineeDTO;
