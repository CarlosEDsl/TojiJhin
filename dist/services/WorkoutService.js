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
exports.WorkoutService = void 0;
const WorkoutExRepository_1 = require("./../repositories/WorkoutExRepository");
const Workout_1 = require("../models/Workout");
const TraineeRepository_1 = require("../repositories/TraineeRepository");
const WorkoutRepository_1 = require("../repositories/WorkoutRepository");
const PersonalTrainerRepository_1 = require("../repositories/PersonalTrainerRepository");
class WorkoutService {
    constructor() {
        this.workoutRepository = WorkoutRepository_1.WorkoutRepository.getInstance();
        this.traineeRepository = TraineeRepository_1.TraineeRepository.getInstance();
        this.personalRepository = PersonalTrainerRepository_1.PersonalTrainerRepository.getInstance();
        this.workoutExRepository = WorkoutExRepository_1.WorkoutExRepository.getInstance();
    }
    registerWorkout(workoutDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workout = yield this.dtoToWorkout(workoutDTO);
            try {
                yield this.foreignVerify(workout);
            }
            catch (err) {
                throw err;
            }
            try {
                return yield this.workoutRepository.insertWorkout(workout);
            }
            catch (err) {
                throw err;
            }
        });
    }
    editWorkout(workoutDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workout = yield this.dtoToWorkout(workoutDTO);
            workout.id = workoutDTO.id || 0;
            const oldWorkout = yield this.workoutRepository.filterWorkout(workout.id);
            if (!oldWorkout)
                throw new Error("workout not found");
            try {
                this.foreignVerify(workout);
            }
            catch (err) {
                throw err;
            }
            try {
                return yield this.workoutRepository.updateWorkout(workout);
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteWorkout(workoutDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const workout = yield this.workoutRepository.filterWorkout(workoutDTO.id || 0);
            if (!workout)
                throw new Error("Workout not found");
            if (workout.id_personal != workoutDTO.id_personal || workout.id_trainee != workoutDTO.id_trainee
                || ((_a = workout.finishDate) === null || _a === void 0 ? void 0 : _a.getTime()) != ((_b = workoutDTO.finishDate) === null || _b === void 0 ? void 0 : _b.getTime()) || workout.description != workoutDTO.description
                || workout.name != workoutDTO.name)
                throw new Error("Data don't match");
            try {
                yield this.workoutRepository.deleteWorkout(workout);
            }
            catch (err) {
                throw err;
            }
        });
    }
    findWorkout(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const workout = yield this.workoutRepository.filterWorkout(id);
            if (!workout)
                throw new Error("Not found");
            return workout;
        });
    }
    getAllWorkoutFromTrainee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.workoutRepository.filterAllWorkoutsFromTrainee(id);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAllWorkoutFromPersonal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.workoutRepository.filterAllWorkoutsFromPersonal(id);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAllWorkout() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.workoutRepository.filterAllWorkouts();
            }
            catch (err) {
                throw err;
            }
        });
    }
    getExercises(workoutId) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercises = yield this.workoutExRepository.filterWorkoutExFromWorkout(workoutId);
            return exercises;
        });
    }
    foreignVerify(workout) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = yield this.personalRepository.filterPersonalById(workout.id_personal);
            const trainee = yield this.traineeRepository.filterTraineeById(workout.id_trainee);
            if (!personal)
                throw new Error("personal don't exist");
            if (!trainee)
                throw new Error("trainee don't exist");
        });
    }
    dtoToWorkout(workoutDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workout = new Workout_1.Workout(workoutDTO.name, workoutDTO.description, workoutDTO.id_trainee, workoutDTO.id_personal, workoutDTO.finishDate, workoutDTO.id);
            return workout;
        });
    }
}
exports.WorkoutService = WorkoutService;
