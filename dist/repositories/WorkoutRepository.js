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
exports.WorkoutRepository = void 0;
const mysql_1 = require("../databases/mysql");
const Workout_1 = require("../models/Workout");
class WorkoutRepository {
    static getInstance() {
        if (!WorkoutRepository.instance) {
            WorkoutRepository.instance = new WorkoutRepository();
        }
        return WorkoutRepository.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.workouts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            finishDate DATE,
            description VARCHAR(255) NOT NULL,
            id_trainee INT NOT NULL,
            id_personal INT NOT NULL,
            FOREIGN KEY (id_trainee) REFERENCES tojiJhin.trainee(id),
            FOREIGN KEY (id_personal) REFERENCES tojiJhin.personalTrainer(id)
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
    insertWorkout(workout) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tojiJhin.workouts (name, finishDate, description, id_trainee, id_personal) VALUES (?, ?, ?, ?, ?)";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal]);
                console.log('Workout inserted: ', result.insertId);
                workout.id = result.insertId;
                return new Promise((resolve) => {
                    resolve(workout);
                });
            }
            catch (err) {
                console.log("Insert error in workouts");
                throw err;
            }
        });
    }
    updateWorkout(workout) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tojiJhin.workouts SET name = ?, finishDate = ?, description = ?, id_trainee = ?, id_personal = ? WHERE id = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal, workout.id]);
                console.log('Workout successfully updated, ID: ', result);
                return new Promise((resolve) => {
                    resolve(workout);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteWorkout(workout) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tojiJhin.workouts WHERE id = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [workout.id]);
                console.log('Workout successfully deleted: ', workout);
                return new Promise((resolve) => {
                    resolve(workout);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterWorkout(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workouts WHERE id = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                return result[0];
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterAllWorkoutsFromPersonal(id_personal) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workouts where id_personal = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id_personal]);
                const workouts = result.map((workout) => new Workout_1.Workout(workout.id, workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal));
                return new Promise((resolve) => {
                    resolve(workouts);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterAllWorkoutsFromTrainee(id_trainee) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workouts where id_trainee = ?";
            try {
                const result = yield (0, mysql_1.executarComandoSQL)(query, [id_trainee]);
                const workouts = result.map((workout) => new Workout_1.Workout(workout.id, workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal));
                return new Promise((resolve) => {
                    resolve(workouts);
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
    filterAllWorkouts() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.workouts";
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
exports.WorkoutRepository = WorkoutRepository;
