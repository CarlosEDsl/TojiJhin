import { WorkoutExRepository } from './../repositories/WorkoutExRepository';
import { WorkoutDTO } from './../models/dtos/WorkoutDTO';
import { PersonalTrainer } from './../models/PersonalTrainer';
import { Workout } from "../models/Workout";
import { TraineeRepository } from "../repositories/TraineeRepository";
import { WorkoutRepository } from "../repositories/WorkoutRepository";
import { PersonalTrainerRepository } from '../repositories/PersonalTrainerRepository';

export class WorkoutService {

    workoutRepository:WorkoutRepository = WorkoutRepository.getInstance();
    traineeRepository:TraineeRepository = TraineeRepository.getInstance();
    personalRepository:PersonalTrainerRepository = PersonalTrainerRepository.getInstance();
    workoutExRepository:WorkoutExRepository = WorkoutExRepository.getInstance();

    async registerWorkout(workoutDTO:WorkoutDTO) {
        const workout = await this.dtoToWorkout(workoutDTO);

        try{
            await this.foreignVerify(workout)
        } catch(err) {
            throw err;
        }
        return await this.workoutRepository.insertWorkout(workout);
    }

    async editWorkout(workoutDTO:WorkoutDTO) {
        const workout = await this.dtoToWorkout(workoutDTO);

        try {
            this.foreignVerify(workout);
        } catch(err) {
            throw err;
        }
        return await this.workoutRepository.updateWorkout(workout);
    }

    async deleteWorkout(workoutDTO:WorkoutDTO) {
        const workout = await this.workoutRepository.filterWorkout(workoutDTO.id || 0);
        if(!workout)
            throw new Error("Workout not found");

        if(workout.id_personal != workoutDTO.id_personal || workout.id_trainee != workoutDTO.id_trainee 
            || workout.finishDate != workoutDTO.finishDate || workout.description != workoutDTO.description
            || workout.name != workoutDTO.name
        )
        throw new Error("Data don't match");
            
        await this.workoutRepository.deleteWorkout(workout);
    }

    async findWorkout(id:number) {
        const workout = await this.workoutRepository.filterWorkout(id);
        if(!workout)
            throw new Error("Not found");
        return workout;
    }

    async getAllWorkoutFromTrainee(id:number) {
        return await this.workoutRepository.filterAllWorkoutsFromTrainee(id);
    }

    async getAllWorkoutFromPersonal(id:number) {
        return await this.workoutRepository.filterAllWorkoutsFromPersonal(id);
    }

    async getAllWorkout() {
        return await this.workoutRepository.filterAllWorkouts();
    }

    async getExercises(workoutId:number) {
        const exercises = await this.workoutExRepository.filterWorkoutExFromWorkout(workoutId);
        return exercises;
    }

    private async foreignVerify(workout:Workout) {
        const personal = await this.personalRepository.filterPersonalById(workout.id_personal);
        const trainee = await this.traineeRepository.filterTraineeById(workout.id_trainee);

        if(!personal)
            throw new Error("personal don't exist");
        if(!trainee)
            throw new Error("trainee don't exist");

    }

    private async dtoToWorkout(workoutDTO:WorkoutDTO) {
        const workout = new Workout(workoutDTO.name, workoutDTO.description, workoutDTO.id_trainee, workoutDTO.id_personal, workoutDTO.finishDate, workoutDTO.id);
        return workout;
    }

}