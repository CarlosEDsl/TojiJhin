import { executarComandoSQL } from "../databases/mysql";
import { PersonalTrainer } from "../models/PersonalTrainer";
import { Trainee } from "../models/Trainee";


export class TraineeRepository{

    private static instance:TraineeRepository;
    public static getInstance() {
        if(!this.instance)
            this.instance = new TraineeRepository();
        return this.instance;
    }

    constructor(){
        this.createTable();
    }

    private async createTable() {
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
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }
    
    async insertTrainee(trainee:Trainee) :Promise<Trainee>{
        const query = "INSERT INTO tojiJhin.trainee (name, age, address, cell, description) VALUES (?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [trainee.name, trainee.age,trainee.address, trainee.cell, trainee.description]);
            console.log('Professor adicionado com sucesso, ID: ', resultado.insertId);
            trainee.id = resultado.insertId;
            return new Promise<Trainee>((resolve)=>{
                resolve(trainee);
            })
        } catch (err) {
            console.error('Erro ao adicionar professor:', err);
            throw err;
        }
    }

    async updateTrainee(trainee:Trainee) :Promise<Trainee>{
        const query = "UPDATE tojiJhin.trainee set name = ?, address = ?, cell = ?, description = ?, age = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [trainee.name, trainee.address, trainee.cell, trainee.description, trainee.age, trainee.id]);
            console.log('Professor atualizado com sucesso, ID: ', resultado);
            return new Promise<Trainee>((resolve)=>{
                resolve(trainee);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o Professor de ID ${trainee.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteTrainee(trainee:Trainee) :Promise<Trainee>{
        const query = "DELETE FROM tojiJhin.trainee where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [trainee.id]);
            console.log('Professor excluido com sucesso: ', trainee);
            return new Promise<Trainee>((resolve)=>{
                resolve(trainee);
            })
        } catch (err:any) {
            console.error(`Falha ao excluir o aluno de ID ${trainee.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterTraineeById(id: number) :Promise<Trainee>{
        const query = "SELECT * FROM tojiJhin.trainee where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Aluno localizado com sucesso, ID: ', resultado);
            return new Promise<Trainee>((resolve)=>{
                resolve(resultado[0]);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o aluno de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterTraineeByCell(cell:number) {
        const query = "SELECT * FROM tojiJhin.trainee where cell = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [cell]);
            console.log('Professor localizado com sucesso, ID: ', resultado);
            return new Promise<Trainee>((resolve)=>{
                resolve(resultado[0]);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Professor de ID ${cell} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllTrainee() :Promise<Trainee[]>{
        const query = "SELECT * FROM tojiJhin.trainee" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Trainee[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os alunos gerando o erro: ${err}`);
            throw err;
        }
    }
}