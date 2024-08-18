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
exports.PersonalTrainerController = void 0;
const tsoa_1 = require("tsoa");
const BasicResponseDTO_1 = require("../models/dtos/BasicResponseDTO");
const PersonalTrainerDTO_1 = require("../models/dtos/PersonalTrainerDTO");
const PersonalTrainerService_1 = require("../services/PersonalTrainerService");
let PersonalTrainerController = class PersonalTrainerController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.personalTrainerService = new PersonalTrainerService_1.PersonalTrainerService();
    }
    createPersonalTrainer(personalTrainer, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPersonalTrainer = yield this.personalTrainerService.registerPersonal(personalTrainer);
                return success(201, new BasicResponseDTO_1.BasicResponseDto("Successfully created", newPersonalTrainer));
            }
            catch (err) {
                console.error("Error in createPersonalTrainer:", err.message);
                return fail(400, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    updatePersonalTrainer(personalTrainer, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPersonalTrainer = yield this.personalTrainerService.editPersonal(personalTrainer);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully updated", updatedPersonalTrainer));
            }
            catch (err) {
                console.error("Error in updatePersonalTrainer:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    deletePersonalTrainer(personalTrainer, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.personalTrainerService.deletePersonal(personalTrainer);
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully deleted", undefined));
            }
            catch (err) {
                console.error("Error in deletePersonalTrainer:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto(err.message, undefined));
            }
        });
    }
    findPersonalTrainer(id, success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personalTrainer = yield this.personalTrainerService.findPersonal(id);
                if (!personalTrainer) {
                    return fail(404, new BasicResponseDTO_1.BasicResponseDto("Personal Trainer not found", undefined));
                }
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", personalTrainer));
            }
            catch (err) {
                console.error("Error in findPersonalTrainer:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
    findAllPersonalTrainers(success, fail) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const personalTrainers = yield this.personalTrainerService.getAllPersonal();
                return success(200, new BasicResponseDTO_1.BasicResponseDto("Successfully found", personalTrainers));
            }
            catch (err) {
                console.error("Error in findAllPersonalTrainers:", err);
                return fail(404, new BasicResponseDTO_1.BasicResponseDto("Error on search", err.message));
            }
        });
    }
};
exports.PersonalTrainerController = PersonalTrainerController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PersonalTrainerDTO_1.PersonalTrainerDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], PersonalTrainerController.prototype, "createPersonalTrainer", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PersonalTrainerDTO_1.PersonalTrainerDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], PersonalTrainerController.prototype, "updatePersonalTrainer", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PersonalTrainerDTO_1.PersonalTrainerDTO, Function, Function]),
    __metadata("design:returntype", Promise)
], PersonalTrainerController.prototype, "deletePersonalTrainer", null);
__decorate([
    (0, tsoa_1.Get)("id/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Res)()),
    __param(2, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function]),
    __metadata("design:returntype", Promise)
], PersonalTrainerController.prototype, "findPersonalTrainer", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, tsoa_1.Res)()),
    __param(1, (0, tsoa_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], PersonalTrainerController.prototype, "findAllPersonalTrainers", null);
exports.PersonalTrainerController = PersonalTrainerController = __decorate([
    (0, tsoa_1.Route)("personal-trainer"),
    (0, tsoa_1.Tags)("PersonalTrainer")
], PersonalTrainerController);
