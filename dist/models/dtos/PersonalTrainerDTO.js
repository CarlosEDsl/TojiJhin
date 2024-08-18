"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalTrainerDTO = void 0;
class PersonalTrainerDTO {
    constructor(id, name, address, cell) {
        this.id = id;
        this.name = name || '';
        this.address = address || '';
        this.cell = cell || 0;
    }
}
exports.PersonalTrainerDTO = PersonalTrainerDTO;
