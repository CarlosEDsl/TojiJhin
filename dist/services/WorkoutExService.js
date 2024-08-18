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
exports.WorkoutExService = void 0;
const WorkoutRepository_1 = require("./../repositories/WorkoutRepository");
const WorkoutExRepository_1 = require("../repositories/WorkoutExRepository");
const WorkoutEx_1 = require("../models/WorkoutEx");
const ExerciseRepository_1 = require("../repositories/ExerciseRepository");
class WorkoutExService {
    constructor() {
        this.workoutExRepository = WorkoutExRepository_1.WorkoutExRepository.getInstance();
        this.workoutRepository = WorkoutRepository_1.WorkoutRepository.getInstance();
        this.exerciseRepository = ExerciseRepository_1.ExerciseRepository.getInstance();
    }
    insertExInWorkout(workouExtDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workoutEx = yield this.dtoToWorkoutEx(workouExtDTO);
            try {
                yield this.workoutVerify(workoutEx);
                yield this.exerciseVerify(workoutEx.exercise);
            }
            catch (err) {
                throw err;
            }
            return yield this.workoutExRepository.insertWorkoutEx(workoutEx);
        });
    }
    editWorkoutEx(workoutExDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workoutEx = yield this.dtoToWorkoutEx(workoutExDTO);
            try {
                yield this.workoutVerify(workoutEx);
                yield this.exerciseVerify(workoutEx.exercise);
            }
            catch (err) {
                throw err;
            }
            return yield this.workoutExRepository.updateWorkoutEx(workoutEx);
        });
    }
    deleteWorkoutEx(workoutExDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const workoutEx = yield this.workoutExRepository.filterWorkoutEx(workoutExDTO.id_workout, workoutExDTO.exerciseId);
            if (workoutEx.priority != workoutExDTO.priority)
                throw new Error("data don't match");
            yield this.workoutExRepository.deleteWorkoutEx(workoutEx);
        });
    }
    getWorkoutEx(workoutId, exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const workoutEx = yield this.workoutExRepository.filterWorkoutEx(workoutId, exerciseId);
            if (!workoutEx) {
                throw new Error("exercise don't found");
            }
            return workoutEx;
        });
    }
    workoutVerify(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            const workout = yield this.workoutRepository.filterWorkout(workoutEx.id_workout);
            if (!workout)
                throw new Error("this workout don't exist");
            const exercises = yield this.workoutExRepository.filterWorkoutExFromWorkout(workout.id);
            exercises.map(ex => {
                if (ex.exercise == workoutEx.exercise)
                    throw new Error("this exercise is already in workout");
            });
        });
    }
    exerciseVerify(exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.exerciseRepository.filterExercise(exerciseId);
            if (!exercise)
                throw new Error("this exercise don't exist");
        });
    }
    dtoToWorkoutEx(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const workoutEx = new WorkoutEx_1.WorkoutEx(dto.id_workout, dto.exerciseId, dto.bench, dto.repetitions, dto.priority);
            return workoutEx;
        });
    }
}
exports.WorkoutExService = WorkoutExService;
