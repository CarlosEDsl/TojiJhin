"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutExRepository = void 0;
const mysql_1 = require("../databases/mysql");
class WorkoutExRepository {
    static getInstance() {
        if (!WorkoutExRepository.instance) {
            WorkoutExRepository.instance = new WorkoutExRepository();
        }
        return WorkoutExRepository.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.workoutEx (
            workoutId INT,
            exerciseId INT,
            bench INT,
            repetitions VARCHAR(10),
            priority INT NOT NULL,
            PRIMARY KEY (workoutId, exerciseId),
            FOREIGN KEY (workoutId) REFERENCES tojiJhin.workouts(id),
            FOREIGN KEY (exerciseId) REFERENCES tojiJhin.exercises(id)
        );`;
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query successful executed:', result);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertWorkoutEx(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tojiJhin.workoutEx (workoutId, exerciseId, bench, repetitions, priority) VALUES (?, ?, ?, ?, ?)";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workoutEx.workoutId, workoutEx.exerciseId,
                    workoutEx.bench, workoutEx.repetitions, workoutEx.priority]);
                return new Promise((resolve) => {
                    resolve(workoutEx);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    updateWorkoutEx(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tojiJhin.workoutEx set bench = ?, repetitions = ?, priority = ? WHERE workoutId = ? AND exerciseId = ?;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workoutEx.bench, workoutEx.repetitions, workoutEx.priority,
                    workoutEx.workoutId, workoutEx.exerciseId]);
                return new Promise((resolve) => {
                    resolve(workoutEx);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteWorkoutEx(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tojiJhin.workoutEx WHERE workoutId = ? AND exerciseId = ?;";
            try {
                console.log(workoutEx.workoutId, workoutEx.exerciseId);
                yield (0, mysql_1.executarComandoSQL)(query, [workoutEx.workoutId, workoutEx.exerciseId]);
            }
            catch (err) {
                throw new Error(`Failed to delete WorkoutEx: ${err.message}`);
            }
        });
    }
    filterWorkoutExFromWorkout(workoutId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workoutEx where workoutId = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workoutId]);
                return new Promise((resolve) => {
                    resolve(result);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterWorkoutEx(workoutId, exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workoutEx where workoutId = ? AND exerciseId = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workoutId, exerciseId]);
                return new Promise((resolve) => {
                    resolve(result[0]);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.WorkoutExRepository = WorkoutExRepository;
