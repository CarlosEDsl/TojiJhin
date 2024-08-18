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
exports.ExerciseRepository = void 0;
const mysql_1 = require("../databases/mysql");
class ExerciseRepository {
    static getInstance() {
        if (!ExerciseRepository.instance) {
            ExerciseRepository.instance = new ExerciseRepository();
        }
        return ExerciseRepository.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.exercises (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(40) NOT NULL UNIQUE,
            description VARCHAR(255) NOT NULL
        )`;
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query successful executed:', result);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertExercise(exercise) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tojiJhin.exercises (name, description) VALUES (?, ?)";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [exercise.name, exercise.description]);
                exercise.id = result.insertId;
                console.log('Exercise inserted: ', result.insertId);
                return new Promise((resolve) => {
                    resolve(exercise);
                });
            }
            catch (err) {
                console.log("insert error in exercises");
                throw err;
            }
        });
    }
    updateExercise(exercise) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tojiJhin.exercises set name = ?, description = ? where id = ?;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [exercise.name, exercise.description, exercise.id]);
                console.log('Successful updated, ID: ', result);
                return new Promise((resolve) => {
                    resolve(exercise);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteExercise(exercise) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tojiJhin.exercises where id = ?;";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [exercise.id]);
                console.log('Successful deleted: ', exercise);
                return new Promise((resolve) => {
                    resolve(exercise);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterExercise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.exercises where id = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Exercise finded, ID: ', result);
                return new Promise((resolve) => {
                    resolve(result[0]);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterExerciseByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.exercises where name = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [name]);
                console.log('Exercise finded, ID: ', result);
                return new Promise((resolve) => {
                    resolve(result[0]);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterAllExercise() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.exercises";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(result);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.ExerciseRepository = ExerciseRepository;
