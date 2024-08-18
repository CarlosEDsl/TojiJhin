import { executarComandoSQL } from "../databases/mysql";
import { Exercise } from "../models/Exercise";

export class ExerciseRepository {

    private static instance:ExerciseRepository;
    public static getInstance() {
        if(!ExerciseRepository.instance) {
            ExerciseRepository.instance = new ExerciseRepository();
        }
        return ExerciseRepository.instance;
    }
    
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.exercises (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(40) NOT NULL UNIQUE,
            description VARCHAR(255) NOT NULL
        )`;

        try {
            const result =  await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertExercise(exercise:Exercise) :Promise<Exercise>{
        const query = "INSERT INTO tojiJhin.exercises (name, description) VALUES (?, ?)" ;

        try{
            const result = await executarComandoSQL(query, [exercise.name, exercise.description]);
            exercise.id = result.insertId;
            console.log('Exercise inserted: ', result.insertId);
            return new Promise<Exercise>((resolve) => {
                resolve(exercise);
            })
        } catch(err) {
            console.log("insert error in exercises");
            throw err;
        }
    }

    async updateExercise(exercise:Exercise) :Promise<Exercise>{
        const query = "UPDATE tojiJhin.exercises set name = ?, description = ? where id = ?;" ;

        try {
            const result = await executarComandoSQL(query, [exercise.name, exercise.description, exercise.id]);
            console.log('Successful updated, ID: ', result);
            return new Promise<Exercise>((resolve)=>{
                resolve(exercise);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async deleteExercise(exercise:Exercise) :Promise<Exercise>{
        const query = "DELETE FROM tojiJhin.exercises where id = ?;" ;

        try {
            const result = await executarComandoSQL(query, [exercise.id]);
            console.log('Successful deleted: ', exercise);
            return new Promise<Exercise>((resolve)=>{
                resolve(exercise);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async filterExercise(id: number) :Promise<Exercise>{
        const query = "SELECT * FROM tojiJhin.exercises where id = ?" ;

        try {
            const result = await executarComandoSQL(query, [id]);
            console.log('Exercise finded, ID: ', result);
            return new Promise<Exercise>((resolve)=>{
                resolve(result[0]);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async filterExerciseByName(name:string) :Promise<Exercise>{
        const query = "SELECT * FROM tojiJhin.exercises where name = ?" ;

        try {
            const result = await executarComandoSQL(query, [name]);
            console.log('Exercise finded, ID: ', result);
            return new Promise<Exercise>((resolve)=>{
                resolve(result[0]);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async filterAllExercise() :Promise<Exercise[]>{
        const query = "SELECT * FROM tojiJhin.exercises";

        try {
            const result = await executarComandoSQL(query, []);
            return new Promise<Exercise[]>((resolve)=>{
                resolve(result);
            })
        } catch (err:any) {
            throw err;
        }
    }

}
