import { TraineeDTO } from "../models/dtos/TraineeDTO";
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

        return await this.traineeRepository.insertTrainee(trainee);
    }

    async editTrainee(traineeDTO:TraineeDTO) {
        const trainee = await this.dtoToTrainee(traineeDTO);
        trainee.id = traineeDTO.id || 0;

        try {
            if(trainee.cell != (await this.traineeRepository.filterTraineeById(trainee.id)).cell)
                await this.verifyCell(trainee.cell);
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
        return await this.traineeRepository.filterAllTrainee();
    }
    
    async verifyCell(cell:number) {
        if(await this.traineeRepository.filterTraineeById(cell))
            throw new Error("this number is already in use");
    }

    async dtoToTrainee(dto:TraineeDTO) {
        const trainee = new Trainee(dto.name, dto.age, dto.cell, dto.description, dto.address);
        return trainee;
    }

}