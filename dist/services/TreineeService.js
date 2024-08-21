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
exports.TraineeService = void 0;
const Trainee_1 = require("../models/Trainee");
const TraineeRepository_1 = require("../repositories/TraineeRepository");
class TraineeService {
    constructor() {
        this.traineeRepository = TraineeRepository_1.TraineeRepository.getInstance();
    }
    insertTrainee(traineeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainee = yield this.dtoToTrainee(traineeDTO);
            try {
                yield this.verifyCell(trainee.cell);
            }
            catch (err) {
                throw err;
            }
            try {
                return yield this.traineeRepository.insertTrainee(trainee);
            }
            catch (err) {
                throw err;
            }
        });
    }
    editTrainee(traineeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainee = yield this.dtoToTrainee(traineeDTO);
            trainee.id = traineeDTO.id || 0;
            if (!(yield this.traineeRepository.filterTraineeById(trainee.id)))
                throw new Error("trainee not found");
            try {
                if (trainee.cell != (yield this.traineeRepository.filterTraineeById(trainee.id)).cell)
                    yield this.verifyCell(trainee.cell);
            }
            catch (err) {
                throw err;
            }
            try {
                return this.traineeRepository.updateTrainee(trainee);
            }
            catch (err) {
                throw err;
            }
        });
    }
    deleteTrainee(traineeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainee = yield this.traineeRepository.filterTraineeById(traineeDTO.id || 0);
            if (!trainee)
                throw new Error("trainee not found");
            if (trainee.name != traineeDTO.name || trainee.cell != traineeDTO.cell || trainee.age != traineeDTO.age
                || trainee.address != traineeDTO.address || trainee.description != traineeDTO.description)
                throw new Error("data don't match");
            try {
                return this.traineeRepository.deleteTrainee(trainee);
            }
            catch (err) {
                throw err;
            }
        });
    }
    findTrainee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainee = yield this.traineeRepository.filterTraineeById(id);
            if (!trainee)
                throw new Error("Not found");
            return trainee;
        });
    }
    getAllTrainee() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.traineeRepository.filterAllTrainee();
            }
            catch (err) {
                throw err;
            }
        });
    }
    verifyCell(cell) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.traineeRepository.filterTraineeByCell(cell))
                throw new Error("this number is already in use");
        });
    }
    dtoToTrainee(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const trainee = new Trainee_1.Trainee(dto.name, dto.age, dto.cell, dto.description, dto.address);
            return trainee;
        });
    }
}
exports.TraineeService = TraineeService;
