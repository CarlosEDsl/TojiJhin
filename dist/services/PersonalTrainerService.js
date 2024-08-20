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
exports.PersonalTrainerService = void 0;
const PersonalTrainer_1 = require("../models/PersonalTrainer");
const PersonalTrainerRepository_1 = require("../repositories/PersonalTrainerRepository");
class PersonalTrainerService {
    constructor() {
        this.personalTrainerRepository = new PersonalTrainerRepository_1.PersonalTrainerRepository();
    }
    registerPersonal(personalDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = yield this.dtoToPersonal((personalDTO));
            try {
                yield this.verifyCell(personal.cell);
            }
            catch (err) {
                throw err;
            }
            return this.personalTrainerRepository.insertPersonal(personal);
        });
    }
    editPersonal(personalDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = yield this.dtoToPersonal(personalDTO);
            personal.id = personalDTO.id || 0;
            if (yield this.personalTrainerRepository.filterPersonalById(personal.id))
                throw new Error("personal not found");
            if (personal.cell != (yield this.personalTrainerRepository.filterPersonalById(personal.id)).cell) {
                try {
                    yield this.verifyCell(personal.cell);
                }
                catch (err) {
                    throw err;
                }
            }
            return this.personalTrainerRepository.updatePersonal(personal);
        });
    }
    deletePersonal(personalDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = yield this.personalTrainerRepository.filterPersonalById(personalDTO.id || 0);
            if (!personal)
                throw new Error("personal not found");
            if (personal.cell != personalDTO.cell || personal.name != personalDTO.name || personal.address != personalDTO.address)
                throw new Error("data don't match");
            return yield this.personalTrainerRepository.deletePersonal(personal);
        });
    }
    findPersonal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = yield this.personalTrainerRepository.filterPersonalById(id);
            if (!personal)
                throw new Error("not found");
            return personal;
        });
    }
    getAllPersonal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.personalTrainerRepository.filterAllPersonal();
        });
    }
    verifyCell(cell) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.personalTrainerRepository.filterPersonalByCell(cell))
                throw new Error("this cell number is already registered");
        });
    }
    dtoToPersonal(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const personal = new PersonalTrainer_1.PersonalTrainer(dto.name, dto.address, dto.cell);
            return personal;
        });
    }
}
exports.PersonalTrainerService = PersonalTrainerService;
