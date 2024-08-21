import { ExerciseDTO } from "../models/dtos/ExerciseDTO";
import { Exercise } from "../models/Exercise";
import { ExerciseRepository } from "../repositories/ExerciseRepository";

export class ExerciseService {

    exerciseRepository:ExerciseRepository = ExerciseRepository.getInstance();

    async registerExercise(exerciseDTO:ExerciseDTO) {
        const exercise = await this.dtoToExercise(exerciseDTO);
        try{
            await this.nameVerify(exercise.name)
        } catch(err){
            throw err;
        }
        try {
            return await this.exerciseRepository.insertExercise(exercise);
        } catch(err) {
            throw err;
        }
    }

    async editExercise(exerciseDTO:ExerciseDTO) {
        const exercise = await this.dtoToExercise(exerciseDTO);
        exercise.id = exerciseDTO.id || 0;
        const oldExercise = await this.exerciseRepository.filterExercise(exercise.id);
        if(!oldExercise)
            throw new Error("exercise not found")
        try{
            if(exercise.name != oldExercise.name)
                await this.nameVerify(exercise.name);
        } catch(err) {
            throw err;
        }

        try {
            return await this.exerciseRepository.updateExercise(exercise);
        } catch(err) {
            throw err;
        }
    }

    async deleteExercise(exerciseDTO: ExerciseDTO) {
        const exercise = await this.exerciseRepository.filterExercise(exerciseDTO.id||0);
        if(!exercise)
            throw new Error("exercise not found");
        if(exercise.name != exerciseDTO.name || exercise.description != exerciseDTO.description) {
            throw new Error("data don't match with id");
        }
        try {
            return await this.exerciseRepository.deleteExercise(exercise);
        } catch(err) {
            throw err;
        }
    }

    async findExercise(id:number) {
        const exercise = await this.exerciseRepository.filterExercise(id);
        if(!exercise)
            throw new Error("not found");
        return exercise;
    }

    async getAllExercise() {
        try {
            return await this.exerciseRepository.filterAllExercise();
        } catch(err) {
            throw err;
        }
    }

    private async nameVerify(name:string) {
        if(await this.exerciseRepository.filterExerciseByName(name))
            throw new Error("this exercise name is already in use");
    }

    private async dtoToExercise(dto:ExerciseDTO) {
        const exercise = new Exercise(dto.name, dto.description);
        return exercise;
    }
}