import { executarComandoSQL } from "../databases/mysql";
import { Exercise } from "../models/Exercise";

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
            id_workout INT NOT NULL,
            FOREIGN KEY(id_workout) REFERERENCES Workouts(id)
        )`;

        try {
            const result =  await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertExercise(exercise:Exercise) :Promise<Exercise>{
        const query = "INSERT INTO tojiJhin.exercises (name, description, bench, repetitions, id_workout) VALUES (?, ?, ?, ?, ?)" ;

        try{
            const result = await executarComandoSQL(query, [exercise.name, exercise.description, exercise.bench,
                                                    exercise.repetitions, exercise.id_workout]);
            console.log('Exercise inserted: ', result.insertId);
            return new Promise<Exercise>((resolve) => {
                resolve(result);
            })
        } catch(err) {
            console.log("insert error in exercises");
            throw err;
        }
    }

    async updateExercise(exercise:Exercise) :Promise<Exercise>{
        const query = "UPDATE tojiJhin.exercises set name = ?, description = ?, bench = ?, repetitions = ?, id_workout = ?, where id = ?;" ;

        try {
            const result = await executarComandoSQL(query, [exercise.name, exercise.description, exercise.bench, 
                exercise.repetitions, exercise.id_workout, exercise.id]);
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
                resolve(result);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async filterAllExercise(workout_id:number) :Promise<Exercise[]>{
        const query = "SELECT * FROM tojiJhin.exercise WHERE id = ?";

        try {
            const result = await executarComandoSQL(query, [workout_id]);
            return new Promise<Exercise[]>((resolve)=>{
                resolve(result);
            })
        } catch (err:any) {
            throw err;
        }
    }

}
