"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ExerciseController = void 0;
const tsoa_1 = require("tsoa");
const ExerciseDTO_1 = require("../models/dtos/ExerciseDTO");
const ExerciseService_1 = require("../services/ExerciseService");
const BasicResponseDTO_1 = require("../models/dtos/BasicResponseDTO");
let ExerciseController = class ExerciseController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.exerciseService = new ExerciseService_1.ExerciseService();
    }
    createExercise(exercise, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newExercise = yield this.exerciseService.registerExercise(exercise);
                return success(201, new BasicResponseDTO_1.BasicResponseDto("Successfully created", newExercise));
            }
            catch (err) {
                console.error("Error in createExercise:", err.message);
                return fail(400, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    updateExercise(exercise, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedExercise = yield this.exerciseService.editExercise(exercise);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully updated", updatedExercise));
            }
            catch (err) {
                console.error("Error in updateExercise:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    deleteExercise(exercise, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.exerciseService.deleteExercise(exercise);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully deleted", undefined));
            }
            catch (err) {
                console.error("Error in deleteExercise:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    findExercise(id, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exercise = yield this.exerciseService.findExercise(id);
                if (!exercise) {
                    return fail(404, new BasicResponseDTO_1.BasicResponseDto("Exercise not found", undefined));
                }
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", exercise));
            }
            catch (err) {
                console.error("Error in findExercise:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllExercises(success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exercises = yield this.exerciseService.getAllExercise();
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", exercises));
            }
            catch (err) {
                console.error("Error in findAllExercises:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
};
exports.ExerciseController = ExerciseController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExerciseDTO_1.ExerciseDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "createExercise", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExerciseDTO_1.ExerciseDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "updateExercise", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ExerciseDTO_1.ExerciseDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "deleteExercise", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findExercise", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], ExerciseController.prototype, "findAllExercises", null);
exports.ExerciseController = ExerciseController = __decorate([
    (0, tsoa_1.Route)("exercise"),
    (0, tsoa_1.Tags)("Exercise")
], ExerciseController);
