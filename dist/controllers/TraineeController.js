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
exports.TraineeController = void 0;
const tsoa_1 = require("tsoa");
const BasicResponseDTO_1 = require("../models/dtos/BasicResponseDTO");
const TraineeDTO_1 = require("../models/dtos/TraineeDTO");
const TreineeService_1 = require("../services/TreineeService");
let TraineeController = class TraineeController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.traineeService = new TreineeService_1.TraineeService();
    }
    createTrainee(trainee, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newTrainee = yield this.traineeService.insertTrainee(trainee);
                return success(201, new BasicResponseDTO_1.BasicResponseDto("Successfully created", newTrainee));
            }
            catch (err) {
                console.error("Error in createTrainee:", err.message);
                return fail(400, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    updateTrainee(trainee, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedTrainee = yield this.traineeService.editTrainee(trainee);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully updated", updatedTrainee));
            }
            catch (err) {
                console.error("Error in updateTrainee:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    deleteTrainee(trainee, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.traineeService.deleteTrainee(trainee);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully deleted", undefined));
            }
            catch (err) {
                console.error("Error in deleteTrainee:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    findTrainee(id, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trainee = yield this.traineeService.findTrainee(id);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", trainee));
            }
            catch (err) {
                console.error("Error in findTrainee:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllTrainees(success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const trainees = yield this.traineeService.getAllTrainee();
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", trainees));
            }
            catch (err) {
                console.error("Error in findAllTrainees:", err.message);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
};
exports.TraineeController = TraineeController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TraineeDTO_1.TraineeDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "createTrainee", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TraineeDTO_1.TraineeDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "updateTrainee", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TraineeDTO_1.TraineeDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "deleteTrainee", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "findTrainee", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "findAllTrainees", null);
exports.TraineeController = TraineeController = __decorate([
    (0, tsoa_1.Route)("trainee"),
    (0, tsoa_1.Tags)("Trainee")
], TraineeController);
