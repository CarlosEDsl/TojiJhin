import { executarComandoSQL } from "../databases/mysql";

export class ExerciseRepository {
    
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.exercises (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(40) NOT NULL,
            description VARCHAR(255) NOT NULL,
            bench INT,
            repetitions INT,
            id_workout INT NOT NULL
        )`;

        try {
            const result =  await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }
}
