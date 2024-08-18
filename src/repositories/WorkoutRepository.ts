import { executarComandoSQL } from "../databases/mysql";
import { Workout } from "../models/Workout";

export class WorkoutRepository {

    private static instance:WorkoutRepository;
    public static getInstance() {
        if(!WorkoutRepository.instance) {
            WorkoutRepository.instance = new WorkoutRepository();
        }
        return WorkoutRepository.instance;
    }

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS tojiJhin.workouts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            finishDate DATE,
            description VARCHAR(255) NOT NULL,
            id_trainee INT NOT NULL,
            id_personal INT NOT NULL
        )`;

        try {
            const result = await executarComandoSQL(query, []);
            console.log('Query successful executed:', result);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertWorkout(workout: Workout): Promise<Workout> {
        const query = "INSERT INTO tojiJhin.workouts (name, finishDate, description, id_trainee, id_personal) VALUES (?, ?, ?, ?, ?)";

        try {
            const result = await executarComandoSQL(query, [workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal]);
            console.log('Workout inserted: ', result.insertId);
            workout.id = result.insertId;
            return new Promise<Workout>((resolve) => {
                resolve(workout);
            });
        } catch (err) {
            console.log("Insert error in workouts");
            throw err;
        }
    }

    async updateWorkout(workout: Workout): Promise<Workout> {
        const query = "UPDATE tojiJhin.workouts SET name = ?, finishDate = ?, description = ?, id_trainee = ?, id_personal = ? WHERE id = ?";

        try {
            const result = await executarComandoSQL(query, [workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal, workout.id]);
            console.log('Workout successfully updated, ID: ', result);
            return new Promise<Workout>((resolve) => {
                resolve(workout);
            });
        } catch (err: any) {
            throw err;
        }
    }

    async deleteWorkout(workout: Workout): Promise<Workout> {
        const query = "DELETE FROM tojiJhin.workouts WHERE id = ?";

        try {
            const result = await executarComandoSQL(query, [workout.id]);
            console.log('Workout successfully deleted: ', workout);
            return new Promise<Workout>((resolve) => {
                resolve(workout);
            });
        } catch (err: any) {
            throw err;
        }
    }

    async filterWorkout(id: number): Promise<Workout> {
        const query = "SELECT * FROM tojiJhin.workouts WHERE id = ?";

        try {
            const result = await executarComandoSQL(query, [id]);
            if (result.length > 0) {
                const workout = result[0];
                console.log('Workout found, ID: ', workout.id);
                return new Promise<Workout>((resolve) => {
                    resolve(result[0]);
                });
            } else {
                throw new Error('Workout not found');
            }
        } catch (err: any) {
            throw err;
        }
    }

    async filterAllWorkoutsFromPersonal(id_personal:number): Promise<Workout[]> {
        const query = "SELECT * FROM tojiJhin.workouts where id_personal = ?";

        try {
            const result = await executarComandoSQL(query, [id_personal]);
            const workouts = result.map((workout: any) => new Workout(workout.id, workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal));
            return new Promise<Workout[]>((resolve) => {
                resolve(workouts);
            });
        } catch (err: any) {
            throw err;
        }
    }

    async filterAllWorkoutsFromTrainee(id_trainee:number): Promise<Workout[]> {
        const query = "SELECT * FROM tojiJhin.workouts where id_trainee = ?";

        try {
            const result = await executarComandoSQL(query, [id_trainee]);
            const workouts = result.map((workout: any) => new Workout(workout.id, workout.name, workout.finishDate, workout.description, workout.id_trainee, workout.id_personal));
            return new Promise<Workout[]>((resolve) => {
                resolve(workouts);
            });
        } catch (err: any) {
            throw err;
        }
    }

    async filterAllWorkouts() {
        const query = "SELECT * FROM tojiJhin.workouts";

        try {
            const result = await executarComandoSQL(query, []);
            return new Promise<Workout[]>((resolve) => {
                resolve(result);
            });
        } catch (err: any) {
            throw err;
        }
    }
}
