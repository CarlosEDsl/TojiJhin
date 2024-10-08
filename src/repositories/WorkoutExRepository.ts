import { WorkoutEx } from './../models/WorkoutEx';
import { executarComandoSQL } from "../databases/mysql";
import { Exercise } from "../models/Exercise";

export class WorkoutExRepository {

    private static instance:WorkoutExRepository;
    public static getInstance() {
        if(!WorkoutExRepository.instance) {
            WorkoutExRepository.instance = new WorkoutExRepository();
        }
        return WorkoutExRepository.instance;
    }
    
    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.workoutEx (
            workoutId INT,
            exerciseId INT,
            bench INT,
            repetitions VARCHAR(10),
            priority INT NOT NULL,
            PRIMARY KEY (workoutId, exerciseId),
            FOREIGN KEY (workoutId) REFERENCES tojiJhin.workouts(id),
            FOREIGN KEY (exerciseId) REFERENCES tojiJhin.exercises(id)
        );`;

        try {
            const result =  await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertWorkoutEx(workoutEx:WorkoutEx) :Promise<WorkoutEx>{
        const query = "INSERT INTO tojiJhin.workoutEx (workoutId, exerciseId, bench, repetitions, priority) VALUES (?, ?, ?, ?, ?)" ;

        try{
            const result = await executarComandoSQL(query, [workoutEx.workoutId, workoutEx.exerciseId,
                 workoutEx.bench, workoutEx.repetitions, workoutEx.priority]);
            return new Promise<WorkoutEx>((resolve) => {
                resolve(workoutEx);
            })
        } catch(err) {
            throw err;
        }
    }

    async updateWorkoutEx(workoutEx:WorkoutEx) :Promise<WorkoutEx>{
        const query = "UPDATE tojiJhin.workoutEx set bench = ?, repetitions = ?, priority = ? WHERE workoutId = ? AND exerciseId = ?;" ;

        try {
            const result = await executarComandoSQL(query, [workoutEx.bench, workoutEx.repetitions, workoutEx.priority,
                                                        workoutEx.workoutId, workoutEx.exerciseId]);
            return new Promise<WorkoutEx>((resolve)=>{
                resolve(workoutEx);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async deleteWorkoutEx(workoutEx: WorkoutEx): Promise<void> {
        const query = "DELETE FROM tojiJhin.workoutEx WHERE workoutId = ? AND exerciseId = ?;";
        try {
            console.log(workoutEx.workoutId, workoutEx.exerciseId);
            await executarComandoSQL(query, [workoutEx.workoutId, workoutEx.exerciseId]);
        } catch (err: any) {
            throw new Error(`Failed to delete WorkoutEx: ${err.message}`);
        }
    }
    

    async filterWorkoutExFromWorkout(workoutId: number) :Promise<WorkoutEx[]>{
        const query = "SELECT * FROM tojiJhin.workoutEx where workoutId = ?" ;

        try {
            const result = await executarComandoSQL(query, [workoutId]);
            return new Promise<WorkoutEx[]>((resolve)=>{
                resolve(result);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async filterWorkoutEx(workoutId:number, exerciseId:number) {
        const query = "SELECT * FROM tojiJhin.workoutEx where workoutId = ? AND exerciseId = ?" ;

        try {
            const result = await executarComandoSQL(query, [workoutId, exerciseId]);
            return new Promise<WorkoutEx>((resolve)=>{
                resolve(result[0]);
            })
        } catch (err:any) {
            throw err;
        }
    }
}
