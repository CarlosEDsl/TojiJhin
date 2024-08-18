"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutDTO = void 0;
class WorkoutDTO {
    constructor(id, name, finishDate, description, id_trainee, id_personal) {
        this.id = id;
        this.name = name || '';
        this.finishDate = finishDate;
        this.description = description || '';
        this.id_trainee = id_trainee || 0;
        this.id_personal = id_personal || 0;
    }
}
exports.WorkoutDTO = WorkoutDTO;
