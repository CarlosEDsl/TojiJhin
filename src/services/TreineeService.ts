import { TraineeDTO } from './../models/dtos/TraineeDTO';
import { Trainee } from "../models/Trainee";
import { TraineeRepository } from "../repositories/TraineeRepository";

export class TraineeService {

    traineeRepository:TraineeRepository = TraineeRepository.getInstance();
    
    async insertTrainee(traineeDTO:TraineeDTO) {
        const trainee = await this.dtoToTrainee(traineeDTO);

        try{
            await this.verifyCell(trainee.cell);
        } catch(err) {
            throw err;
        }

        try {
            return await this.traineeRepository.insertTrainee(trainee);
        } catch(err) {
            throw err;
        }
    }

    async editTrainee(traineeDTO:TraineeDTO) {
        const trainee = await this.dtoToTrainee(traineeDTO);
        trainee.id = traineeDTO.id || 0;
        if(!await this.traineeRepository.filterTraineeById(trainee.id))
            throw new Error("trainee not found");
        try {
            if(trainee.cell != (await this.traineeRepository.filterTraineeById(trainee.id)).cell)
                await this.verifyCell(trainee.cell);
        } catch(err) {
            throw err;
        }
        try {
            return this.traineeRepository.updateTrainee(trainee);
        } catch(err) {
            throw err;
        }
    }

    async deleteTrainee(traineeDTO:TraineeDTO) {
        const trainee = await this.traineeRepository.filterTraineeById(traineeDTO.id || 0);

        if(!trainee)
            throw new Error("trainee not found");

        if(trainee.name != traineeDTO.name || trainee.cell != traineeDTO.cell || trainee.age != traineeDTO.age
            || trainee.address != traineeDTO.address || trainee.description != traineeDTO.description)
            throw new Error("data don't match");

        try {        
                return this.traineeRepository.deleteTrainee(trainee);
        } catch(err) {
            throw err;
        }
    }

    async findTrainee(id:number) {
        const trainee = await this.traineeRepository.filterTraineeById(id);
        if(!trainee)
            throw new Error("Not found");
        return trainee;
    }

    async getAllTrainee(){
        try {
            return await this.traineeRepository.filterAllTrainee();
        } catch(err) {
            throw err;
        }
    }
    
    private async verifyCell(cell:number) {
        if(await this.traineeRepository.filterTraineeByCell(cell))
            throw new Error("this number is already in use");
    }

    private async dtoToTrainee(dto:TraineeDTO) {
        const trainee = new Trainee(dto.name, dto.age, dto.cell, dto.description, dto.address);
        return trainee;
    }

}