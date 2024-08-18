import { Workout } from './../models/Workout';
import { WorkoutRepository } from './../repositories/WorkoutRepository';
import { WorkoutExDTO } from './../models/dtos/WorkoutExDTO';
import { WorkoutExRepository } from "../repositories/WorkoutExRepository";
import { WorkoutEx } from '../models/WorkoutEx';
import { ExerciseRepository } from '../repositories/ExerciseRepository';

export class WorkoutExService {

    workoutExRepository:WorkoutExRepository = WorkoutExRepository.getInstance();
    workoutRepository:WorkoutRepository = WorkoutRepository.getInstance();
    exerciseRepository:ExerciseRepository = ExerciseRepository.getInstance();

    async insertExInWorkout(workouExtDTO:WorkoutExDTO) {
        const workoutEx = await this.dtoToWorkoutEx(workouExtDTO);
        try {
            await this.workoutVerify(workoutEx);
            await this.exerciseVerify(workoutEx.exerciseId);
            await this.repeaterVerify(workoutEx);
        } catch(err) {
            throw err;
        }
        return await this.workoutExRepository.insertWorkoutEx(workoutEx);
    }

    async editWorkoutEx(workoutExDTO:WorkoutExDTO) {
        const workoutEx = await this.dtoToWorkoutEx(workoutExDTO);
        const oldWorkoutEx = await this.workoutExRepository.filterWorkoutEx(workoutEx.workoutId, workoutEx.exerciseId);
        if(!oldWorkoutEx) {
            throw new Error("Not found");
        }

        return await this.workoutExRepository.updateWorkoutEx(workoutEx);
    }

    async deleteWorkoutEx(workoutExDTO:WorkoutExDTO) {
        const workoutEx = await this.workoutExRepository.filterWorkoutEx(workoutExDTO.workoutId, workoutExDTO.exerciseId);

        if(!workoutEx)
            throw new Error("Not found");

        if(workoutEx.priority != workoutExDTO.priority || workoutEx.bench != workoutExDTO.bench || workoutEx.repetitions != workoutExDTO.repetitions)
            throw new Error("data don't match");
        
        await this.workoutExRepository.deleteWorkoutEx(workoutEx);
    }

    async getWorkoutEx(workoutId:number, exerciseId:number) {
        const workoutEx = await this.workoutExRepository.filterWorkoutEx(workoutId, exerciseId);

        if(!workoutEx) {
            throw new Error("Exercise not found");
        }

        return workoutEx;
    }

    async getWorkoutAllEx(workoutId:number) {
        return await this.workoutExRepository.filterWorkoutExFromWorkout(workoutId);
    }

    private async workoutVerify(workoutEx:WorkoutEx) {
        const workout = await this.workoutRepository.filterWorkout(workoutEx.workoutId);
        if(!workout)
            throw new Error("this workout don't exist")
    }

    private async repeaterVerify(workoutEx: WorkoutEx): Promise<void> {
        const exercises = await this.workoutExRepository.filterWorkoutExFromWorkout(workoutEx.workoutId);
        const exerciseExists = exercises.some(ex => ex.exerciseId === workoutEx.exerciseId);

        if (exerciseExists) {
            throw new Error("This exercise is already in the workout");
        }
    }
    
    private async exerciseVerify(exerciseId:number) {
        const exercise = await this.exerciseRepository.filterExercise(exerciseId);
        if(!exercise)
            throw new Error("this exercise don't exist");
    }

    private async dtoToWorkoutEx(dto:WorkoutExDTO) {
        const workoutEx = new WorkoutEx(dto.workoutId, dto.exerciseId, dto.bench, dto.repetitions, dto.priority)
        return workoutEx;
    }

}