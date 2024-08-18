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
exports.WorkoutController = void 0;
const tsoa_1 = require("tsoa");
const BasicResponseDTO_1 = require("../models/dtos/BasicResponseDTO");
const WorkoutDTO_1 = require("../models/dtos/WorkoutDTO");
const WorkoutService_1 = require("../services/WorkoutService");
let WorkoutController = class WorkoutController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.workoutService = new WorkoutService_1.WorkoutService();
    }
    createWorkout(workout, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newWorkout = yield this.workoutService.registerWorkout(workout);
                return success(201, new BasicResponseDTO_1.BasicResponseDto("Successfully created", newWorkout));
            }
            catch (err) {
                console.error("Error in createWorkout:", err.message);
                return fail(400, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    updateWorkout(workout, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedWorkout = yield this.workoutService.editWorkout(workout);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully updated", updatedWorkout));
            }
            catch (err) {
                console.error("Error in updateWorkout:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    deleteWorkout(workout, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.workoutService.deleteWorkout(workout);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully deleted", undefined));
            }
            catch (err) {
                console.error("Error in deleteWorkout:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    findWorkout(id, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workout = yield this.workoutService.findWorkout(id);
                if (!workout) {
                    return fail(404, new BasicResponseDTO_1.BasicResponseDto("Workout not found", undefined));
                }
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", workout));
            }
            catch (err) {
                console.error("Error in findWorkout:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllWorkoutsFromTrainee(traineeId, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workouts = yield this.workoutService.getAllWorkoutFromTrainee(traineeId);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", workouts));
            }
            catch (err) {
                console.error("Error in findAllWorkouts:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllWorkoutsFromPersonal(personalId, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workouts = yield this.workoutService.getAllWorkoutFromPersonal(personalId);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", workouts));
            }
            catch (err) {
                console.error("Error in findAllWorkouts:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllWorkouts(success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workouts = yield this.workoutService.getAllWorkout();
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", workouts));
            }
            catch (err) {
                console.error("Error in findAllWorkouts:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
};
exports.WorkoutController = WorkoutController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutDTO_1.WorkoutDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "createWorkout", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutDTO_1.WorkoutDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "updateWorkout", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [WorkoutDTO_1.WorkoutDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "deleteWorkout", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findWorkout", null);
__decorate([
    (0, tsoa_1.Get)("all/trainee/{traineeId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findAllWorkoutsFromTrainee", null);
__decorate([
    (0, tsoa_1.Get)("all/personal/{personalId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findAllWorkoutsFromPersonal", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], WorkoutController.prototype, "findAllWorkouts", null);
exports.WorkoutController = WorkoutController = __decorate([
    (0, tsoa_1.Route)("workout"),
    (0, tsoa_1.Tags)("Workout")
], WorkoutController);
