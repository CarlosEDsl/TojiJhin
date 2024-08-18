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
exports.PersonalTrainerRepository = void 0;
const mysql_1 = require("../databases/mysql");
class PersonalTrainerRepository {
    static getInstance() {
        if (!PersonalTrainerRepository.instance)
            PersonalTrainerRepository.instance = new PersonalTrainerRepository();
        return PersonalTrainerRepository.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.personalTrainer (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            cell VARCHAR(255) NOT NULL UNIQUE
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insertPersonal(personaltrainer) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tojiJhin.personalTrainer (name, address, cell) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [personaltrainer.name, personaltrainer.address, personaltrainer.cell]);
                console.log('Professor adicionado com sucesso, ID: ', resultado.insertId);
                personaltrainer.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(personaltrainer);
                });
            }
            catch (err) {
                console.error('Erro ao adicionar professor:', err);
                throw err;
            }
        });
    }
    updatePersonal(personaltrainer) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tojiJhin.personalTrainer set name = ?, address = ?, cell = ? where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [personaltrainer.name, personaltrainer.address, personaltrainer.cell, personaltrainer.id]);
                console.log('Professor atualizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(personaltrainer);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o Professor de ID ${personaltrainer.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deletePersonal(personalTrainer) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tojiJhin.personalTrainer where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [personalTrainer.id]);
                console.log('Professor excluido com sucesso: ', personalTrainer);
                return new Promise((resolve) => {
                    resolve(personalTrainer);
                });
            }
            catch (err) {
                console.error(`Falha ao excluir o professor de ID ${personalTrainer.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterPersonalById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.personalTrainer where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Professor localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o Professor de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterPersonalByCell(cell) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.personalTrainer where cell = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [cell]);
                console.log('Professor localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o Professor de ID ${cell} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterAllPersonal() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.personalTrainer";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao listar os professores gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.PersonalTrainerRepository = PersonalTrainerRepository;
