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
const Trainee_1 = require("../models/Trainee");
let TraineeController = class TraineeController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.trainees = [];
    }
    getAllTrainees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.trainees;
        });
    }
    getTrainee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.trainees.find(trainee => trainee.id === id);
        });
    }
    createTrainee(trainee) {
        return __awaiter(this, void 0, void 0, function* () {
            this.trainees.push(trainee);
            return trainee;
        });
    }
};
exports.TraineeController = TraineeController;
__decorate([
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "getAllTrainees", null);
__decorate([
    (0, tsoa_1.Get)('{id}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "getTrainee", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Trainee_1.Trainee]),
    __metadata("design:returntype", Promise)
], TraineeController.prototype, "createTrainee", null);
exports.TraineeController = TraineeController = __decorate([
    (0, tsoa_1.Route)('trainees'),
    (0, tsoa_1.Tags)('Trainees')
], TraineeController);
