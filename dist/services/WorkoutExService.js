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
const WorkoutExRepository_1 = require("../repositories/WorkoutExRepository");
const WorkoutRepository_1 = require("./../repositories/WorkoutRepository");
const ExerciseRepository_1 = require("../repositories/ExerciseRepository");
const WorkoutEx_1 = require("../models/WorkoutEx");
class WorkoutExService {
    constructor() {
        this.workoutExRepository = WorkoutExRepository_1.WorkoutExRepository.getInstance();
        this.workoutRepository = WorkoutRepository_1.WorkoutRepository.getInstance();
        this.exerciseRepository = ExerciseRepository_1.ExerciseRepository.getInstance();
    }
    insertExInWorkout(workoutExDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('insertExInWorkout called with:', workoutExDTO);
            const workoutEx = yield this.dtoToWorkoutEx(workoutExDTO);
            console.log('Converted WorkoutEx:', workoutEx);
            try {
                yield this.workoutVerify(workoutEx);
                yield this.exerciseVerify(workoutEx.exerciseId);
                yield this.repeaterVerify(workoutEx);
            }
            catch (err) {
                console.error('Error in insertExInWorkout:', err);
                throw err;
            }
            return yield this.workoutExRepository.insertWorkoutEx(workoutEx);
        });
    }
    editWorkoutEx(workoutExDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('editWorkoutEx called with:', workoutExDTO);
            const workoutEx = yield this.dtoToWorkoutEx(workoutExDTO);
            console.log('Converted WorkoutEx:', workoutEx);
            const oldWorkoutEx = yield this.workoutExRepository.filterWorkoutEx(workoutEx.workoutId, workoutEx.exerciseId);
            console.log('Old WorkoutEx:', oldWorkoutEx);
            if (!oldWorkoutEx) {
                throw new Error("Not found");
            }
            yield this.workoutExRepository.updateWorkoutEx(workoutEx);
        });
    }
    deleteWorkoutEx(workoutExDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('deleteWorkoutEx called with:', workoutExDTO);
            const workoutEx = yield this.workoutExRepository.filterWorkoutEx(workoutExDTO.workoutId, workoutExDTO.exerciseId);
            console.log('WorkoutEx found for deletion:', workoutEx);
            if (!workoutEx) {
                throw new Error("Not found");
            }
            if (workoutEx.priority !== workoutExDTO.priority ||
                workoutEx.bench !== workoutExDTO.bench ||
                workoutEx.repetitions !== workoutExDTO.repetitions) {
                throw new Error("Data doesn't match");
            }
            yield this.workoutExRepository.deleteWorkoutEx(workoutEx);
        });
    }
    getWorkoutEx(workoutId, exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getWorkoutEx called with:', { workoutId, exerciseId });
            const workoutEx = yield this.workoutExRepository.filterWorkoutEx(workoutId, exerciseId);
            console.log('WorkoutEx found:', workoutEx);
            if (!workoutEx) {
                throw new Error("WorkoutEx not found");
            }
            return workoutEx;
        });
    }
    getWorkoutAllEx(workoutId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('getWorkoutAllEx called with:', workoutId);
            const exercises = yield this.workoutExRepository.filterWorkoutExFromWorkout(workoutId);
            console.log('All WorkoutEx for workoutId:', exercises);
            return exercises;
        });
    }
    workoutVerify(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('workoutVerify called with:', workoutEx);
            const workout = yield this.workoutRepository.filterWorkout(workoutEx.workoutId);
            console.log('Workout found:', workout);
            if (!workout) {
                throw new Error("This workout doesn't exist");
            }
        });
    }
    repeaterVerify(workoutEx) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('repeaterVerify called with:', workoutEx);
            const exercises = yield this.workoutExRepository.filterWorkoutExFromWorkout(workoutEx.workoutId);
            console.log('All exercises in workout:', exercises);
            const exerciseExists = exercises.some(ex => ex.exerciseId === workoutEx.exerciseId);
            if (exerciseExists) {
                throw new Error("This exercise is already in the workout");
            }
        });
    }
    exerciseVerify(exerciseId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('exerciseVerify called with:', exerciseId);
            const exercise = yield this.exerciseRepository.filterExercise(exerciseId);
            console.log('Exercise found:', exercise);
            if (!exercise) {
                throw new Error("This exercise doesn't exist");
            }
        });
    }
    dtoToWorkoutEx(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('dtoToWorkoutEx called with:', dto);
            return new WorkoutEx_1.WorkoutEx(dto.workoutId, dto.exerciseId, dto.bench, dto.repetitions, dto.priority);
        });
    }
}
exports.WorkoutExService = WorkoutExService;
