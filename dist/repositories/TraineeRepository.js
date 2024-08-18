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
exports.TraineeRepository = void 0;
const mysql_1 = require("../databases/mysql");
class TraineeRepository {
    static getInstance() {
        if (!this.instance)
            this.instance = new TraineeRepository();
        return this.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.trainee (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            age INT NOT NULL,
            address VARCHAR(255),
            cell VARCHAR(15) NOT NULL UNIQUE,
            description VARCHAR(255)
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
    insertTrainee(trainee) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO tojiJhin.trainee (name, age, address, cell, description) VALUES (?, ?, ?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [trainee.name, trainee.age, trainee.address, trainee.cell, trainee.description]);
                console.log('Professor adicionado com sucesso, ID: ', resultado.insertId);
                trainee.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(trainee);
                });
            }
            catch (err) {
                console.error('Erro ao adicionar professor:', err);
                throw err;
            }
        });
    }
    updateTrainee(trainee) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE tojiJhin.trainee set name = ?, address = ?, cell = ?, description = ?, age = ? where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [trainee.name, trainee.address, trainee.cell, trainee.description, trainee.age, trainee.id]);
                console.log('Professor atualizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(trainee);
                });
            }
            catch (err) {
                console.error(`Erro ao atualizar o Professor de ID ${trainee.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    deleteTrainee(trainee) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM tojiJhin.trainee where id = ?;";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [trainee.id]);
                console.log('Professor excluido com sucesso: ', trainee);
                return new Promise((resolve) => {
                    resolve(trainee);
                });
            }
            catch (err) {
                console.error(`Falha ao excluir o aluno de ID ${trainee.id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterTraineeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.trainee where id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Aluno localizado com sucesso, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error(`Falha ao procurar o aluno de ID ${id} gerando o erro: ${err}`);
                throw err;
            }
        });
    }
    filterTraineeByCell(cell) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.trainee where cell = ?";
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
    filterAllTrainee() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tojiJhin.trainee";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error(`Falha ao listar os alunos gerando o erro: ${err}`);
                throw err;
            }
        });
    }
}
exports.TraineeRepository = TraineeRepository;
