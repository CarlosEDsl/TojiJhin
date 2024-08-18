import { Workout } from './../models/Workout';
import { WorkoutRepository } from './../repositories/WorkoutRepository';
import { WorkoutExDTO } from './../models/dtos/WorkoutExDTO';
import { WorkoutExRepository } from "../repositories/WorkoutExRepository";
import { WorkoutEx } from '../models/WorkoutEx';
import { ExerciseRepository } from '../repositories/ExerciseRepository';
import e from 'express';

export class WorkoutExService {

    workoutExRepository:WorkoutExRepository = WorkoutExRepository.getInstance();
    workoutRepository:WorkoutRepository = WorkoutRepository.getInstance();
    exerciseRepository:ExerciseRepository = ExerciseRepository.getInstance();

    async insertExInWorkout(workouExtDTO:WorkoutExDTO) {
        const workoutEx = await this.dtoToWorkoutEx(workouExtDTO);

        try {
            await this.workoutVerify(workoutEx);
            await this.exerciseVerify(workoutEx.exercise);
        } catch(err) {
            throw err;
        }
        return await this.workoutExRepository.insertWorkoutEx(workoutEx);
    }

    async editWorkoutEx(workoutExDTO:WorkoutExDTO) {
        const workoutEx = await this.dtoToWorkoutEx(workoutExDTO);

        try{
            await this.workoutVerify(workoutEx);
            await this.exerciseVerify(workoutEx.exercise);
        } catch(err) {
            throw err;
        }
        return await this.workoutExRepository.updateWorkoutEx(workoutEx);
    }

    async deleteWorkoutEx(workoutExDTO:WorkoutExDTO) {
        const workoutEx = await this.workoutExRepository.filterWorkoutEx(workoutExDTO.id_workout, workoutExDTO.exerciseId);
    
        if(workoutEx.priority != workoutExDTO.priority)
            throw new Error("data don't match");
        await this.workoutExRepository.deleteWorkoutEx(workoutEx);
    }

    async getWorkoutEx(workoutId:number, exerciseId:number) {
        const workoutEx = await this.workoutExRepository.filterWorkoutEx(workoutId, exerciseId);

        if(!workoutEx) {
            throw new Error("exercise don't found");
        }

        return workoutEx;
    }

    async workoutVerify(workoutEx:WorkoutEx) {
        const workout = await this.workoutRepository.filterWorkout(workoutEx.id_workout);
        if(!workout)
            throw new Error("this workout don't exist")
        const exercises = await this.workoutExRepository.filterWorkoutExFromWorkout(workout.id);
        exercises.map(ex => {
            if(ex.exercise == workoutEx.exercise)
                throw new Error("this exercise is already in workout");
        })

    }
    
    async exerciseVerify(exerciseId:number) {
        const exercise = await this.exerciseRepository.filterExercise(exerciseId);
        if(!exercise)
            throw new Error("this exercise don't exist");
    }

    async dtoToWorkoutEx(dto:WorkoutExDTO) {
        const workoutEx = new WorkoutEx(dto.id_workout, dto.exerciseId, dto.bench, dto.repetitions, dto.priority)
        return workoutEx;
    }

}