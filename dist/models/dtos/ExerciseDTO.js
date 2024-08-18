"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseDTO = void 0;
class ExerciseDTO {
    constructor(id, name, description) {
        this.id = id;
        this.name = name || '';
        this.description = description || '';
    }
}
exports.ExerciseDTO = ExerciseDTO;
