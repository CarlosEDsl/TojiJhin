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
exports.WorkoutExController = void 0;
const tsoa_1 = require("tsoa");
const BasicResponseDTO_1 = require("../models/dtos/BasicResponseDTO");
const WorkoutExDTO_1 = require("../models/dtos/WorkoutExDTO");
const WorkoutExService_1 = require("../services/WorkoutExService");
let WorkoutExController = class WorkoutExController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.workoutExService = new WorkoutExService_1.WorkoutExService();
    }
    createWorkoutEx(workoutEx, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newWorkoutEx = yield this.workoutExService.insertExInWorkout(workoutEx);
                return success(201, new BasicResponseDTO_1.BasicResponseDto("Successfully created", newWorkoutEx));
            }
            catch (err) {
                console.error("Error in createWorkoutEx:", err.message);
                return fail(400, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    updateWorkoutEx(workoutEx, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedWorkoutEx = yield this.workoutExService.editWorkoutEx(workoutEx);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully updated", updatedWorkoutEx));
            }
            catch (err) {
                console.error("Error in updateWorkoutEx:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    deleteWorkoutEx(workoutEx, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.workoutExService.deleteWorkoutEx(workoutEx);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully deleted", undefined));
            }
            catch (err) {
                console.error("Error in deleteWorkoutEx:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    getExercisesFromWorkout(workoutId, exerciseId, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workoutEx = yield this.workoutExService.getWorkoutEx(workoutId, exerciseId);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", workoutEx));
            }
            catch (err) {
                console.error("Error in findWorkoutEx:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
};
exports.WorkoutExController = WorkoutExController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutExDTO_1.WorkoutExDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutExController.prototype, "createWorkoutEx", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutExDTO_1.WorkoutExDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutExController.prototype, "updateWorkoutEx", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutExDTO_1.WorkoutExDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutExController.prototype, "deleteWorkoutEx", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Res)()),
    __param(3, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutExController.prototype, "getExercisesFromWorkout", null);
exports.WorkoutExController = WorkoutExController = __decorate([
    (0, tsoa_1.Route)("workout-ex"),
    (0, tsoa_1.Tags)("WorkoutEx")
], WorkoutExController);
