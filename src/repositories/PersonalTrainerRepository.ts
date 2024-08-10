import { executarComandoSQL } from "../databases/mysql";
import { PersonalTrainer } from "../models/PersonalTrainer";


export class ProductRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.personalTrainer (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            cell VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }
    
    async insertPersonal(personaltrainer:PersonalTrainer) :Promise<PersonalTrainer>{
        const query = "INSERT INTO tojiJhin.personalTrainer (name, address, cell) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [personaltrainer.name, personaltrainer.address, personaltrainer.cell]);
            console.log('Professor adicionado com sucesso, ID: ', resultado.insertId);
            personaltrainer.id = resultado.insertId;
            return new Promise<PersonalTrainer>((resolve)=>{
                resolve(personaltrainer);
            })
        } catch (err) {
            console.error('Erro ao adicionar professor:', err);
            throw err;
        }
    }

    async updateProduct(personaltrainer:PersonalTrainer) :Promise<PersonalTrainer>{
        const query = "UPDATE tojiJhin.personalTrainer set name = ?, address = ?, cell = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [personaltrainer.name, personaltrainer.address, personaltrainer.cell, personaltrainer.id]);
            console.log('Professor atualizado com sucesso, ID: ', resultado);
            return new Promise<PersonalTrainer>((resolve)=>{
                resolve(personaltrainer);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o Professor de ID ${personaltrainer.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteProduct(personalTrainer:PersonalTrainer) :Promise<PersonalTrainer>{
        const query = "DELETE FROM tojiJhin.personalTrainer where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [personalTrainer.id]);
            console.log('Professor excluido com sucesso: ', personalTrainer);
            return new Promise<PersonalTrainer>((resolve)=>{
                resolve(personalTrainer);
            })
        } catch (err:any) {
            console.error(`Falha ao excluir o professor de ID ${personalTrainer.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProductById(id: number) :Promise<PersonalTrainer>{
        const query = "SELECT * FROM tojiJhin.personalTrainer where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Professor localizado com sucesso, ID: ', resultado);
            return new Promise<PersonalTrainer>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Professor de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProductByName(name: string) :Promise<PersonalTrainer[]>{
        const query = "SELECT * FROM tojiJhin.personalTrainer where name = ?" ;

        try {
            const resultado:PersonalTrainer[] = await executarComandoSQL(query, [name]);
            console.log('Professor localizado com sucesso, ID: ', resultado);
            return new Promise<PersonalTrainer[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o Professor ${name} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllProduct() :Promise<PersonalTrainer[]>{
        const query = "SELECT * FROM tojiJhin.personalTrainer" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<PersonalTrainer[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os professores gerando o erro: ${err}`);
            throw err;
        }
    }
}