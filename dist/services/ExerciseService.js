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
exports.ExerciseService = void 0;
const Exercise_1 = require("../models/Exercise");
const ExerciseRepository_1 = require("../repositories/ExerciseRepository");
class ExerciseService {
    constructor() {
        this.exerciseRepository = ExerciseRepository_1.ExerciseRepository.getInstance();
    }
    registerExercise(exerciseDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.dtoToExercise(exerciseDTO);
            try {
                yield this.nameVerify(exercise.name);
            }
            catch (err) {
                throw err;
            }
            return yield this.exerciseRepository.insertExercise(exercise);
        });
    }
    editExercise(exerciseDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.dtoToExercise(exerciseDTO);
            exercise.id = exerciseDTO.id || 0;
            const oldExercise = yield this.exerciseRepository.filterExercise(exercise.id);
            if (!oldExercise)
                throw new Error("exercise not found");
            try {
                if (exercise.name != oldExercise.name)
                    yield this.nameVerify(exercise.name);
            }
            catch (err) {
                throw err;
            }
            return yield this.exerciseRepository.updateExercise(exercise);
        });
    }
    deleteExercise(exerciseDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.exerciseRepository.filterExercise(exerciseDTO.id || 0);
            if (!exercise)
                throw new Error("exercise not found");
            if (exercise.name != exerciseDTO.name || exercise.description != exerciseDTO.description) {
                throw new Error("data don't match with id");
            }
            return yield this.exerciseRepository.deleteExercise(exercise);
        });
    }
    findExercise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.exerciseRepository.filterExercise(id);
            if (!exercise)
                throw new Error("not found");
            return exercise;
        });
    }
    getAllExercise() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exerciseRepository.filterAllExercise();
        });
    }
    nameVerify(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.exerciseRepository.filterExerciseByName(name))
                throw new Error("this exercise name is already in use");
        });
    }
    dtoToExercise(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = new Exercise_1.Exercise(dto.name, dto.description);
            return exercise;
        });
    }
}
exports.ExerciseService = ExerciseService;
