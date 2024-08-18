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

        return await this.exerciseRepository.insertExercise(exercise);
    }

    async editExercise(exerciseDTO:ExerciseDTO) {
        const exercise = await this.dtoToExercise(exerciseDTO);
        exercise.id = exerciseDTO.id || 0;
        try{
            if(exercise.name != (await this.exerciseRepository.filterExercise(exercise.id)).name)
                await this.nameVerify(exercise.name);
        } catch(err) {
            throw err;
        }

        return await this.exerciseRepository.updateExercise(exercise);
    }

    async deleteExercise(exerciseDTO: ExerciseDTO) {
        const exercise = await this.exerciseRepository.filterExercise(exerciseDTO.id||0);
        if(!exercise)
            throw new Error("exercise not found");
        if(exercise.name != exerciseDTO.name || exercise.description != exerciseDTO.description) {
            throw new Error("data don't match with id");
        }
        return await this.exerciseRepository.deleteExercise(exercise);
    }

    async findExercise(id:number) {
        const exercise = await this.exerciseRepository.filterExercise(id);
        if(!exercise)
            throw new Error("not found");
        return exercise;
    }

    async getAllExercise() {
        return await this.exerciseRepository.filterAllExercise();
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