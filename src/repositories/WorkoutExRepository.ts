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
            workoutId INT PRIMARY KEY,
            exerciseId INT,
            bench INT,
            repetitions VARCHAR(10),
            priority INT NOT NULL
        )`;

        try {
            const result =  await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertWorkoutEx(workoutEx:WorkoutEx) :Promise<Exercise>{
        const query = "INSERT INTO tojiJhin.workoutEx (workoutId, exerciseId, bench, repetitions, priority) VALUES (?, ?, ?, ?, ?)" ;

        try{
            const result = await executarComandoSQL(query, [workoutEx.id_workout, workoutEx.exercise,
                 workoutEx.bench, workoutEx.repetitions, workoutEx.priority]);
            return new Promise<Exercise>((resolve) => {
                resolve(result);
            })
        } catch(err) {
            throw err;
        }
    }

    async updateWorkoutEx(workoutEx:WorkoutEx) :Promise<WorkoutEx>{
        const query = "UPDATE tojiJhin.workoutEx set exerciseId, bench = ?, repetitions = ?, priority = ? workoutId id = ?;" ;

        try {
            const result = await executarComandoSQL(query, [workoutEx.exercise, workoutEx.bench, workoutEx.repetitions,
                                                        workoutEx.priority, workoutEx.id_workout]);
            return new Promise<WorkoutEx>((resolve)=>{
                resolve(workoutEx);
            })
        } catch (err:any) {
            throw err;
        }
    }

    async deleteWorkoutEx(workoutEx:WorkoutEx) :Promise<WorkoutEx>{
        const query = "DELETE FROM tojiJhin.workoutEx where workoutId = ? AND exerciseId = ?;" ;

        try {
            const result = await executarComandoSQL(query, [workoutEx.id_workout, workoutEx.exercise]);
            return new Promise<WorkoutEx>((resolve)=>{
                resolve(result);
            })
        } catch (err:any) {
            throw err;
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
