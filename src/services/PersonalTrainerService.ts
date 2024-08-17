import { PersonalTrainerDTO } from './../models/dtos/PersonalTrainerDTO';
import { PersonalTrainer } from '../models/PersonalTrainer';
import { PersonalTrainerRepository } from '../repositories/PersonalTrainerRepository';
export class PersonalTrainerService {

    personalTrainerRepository:PersonalTrainerRepository = new PersonalTrainerRepository();

    async registerPersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.dtoToPersonal((personalDTO));

        try{
            this.verifyCell(personal.cell);
        } catch(err) {
            throw err;
        }

        return this.personalTrainerRepository.insertPersonal(personal);
    }

    async editPersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.dtoToPersonal(personalDTO);
        personal.id = personalDTO.id || 0;

        if(personal.cell != (await this.personalTrainerRepository.filterPersonalById(personal.id)).cell) {
            try{
                this.verifyCell(personal.cell);
            } catch(err) {
                throw err;
            }
        }
        return this.personalTrainerRepository.updatePersonal(personal);
    }

    async deletePersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.personalTrainerRepository.filterPersonalById(personalDTO.id || 0);
        if(personal.cell != personalDTO.cell || personal.name != personalDTO.name || personal.address != personal.address)
            throw new Error("data don't match");
        return await this.personalTrainerRepository.deletePersonal(personal);
    }

    async findPersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.personalTrainerRepository.filterPersonalById(personalDTO.id || 0);
        if(!personal)
            throw new Error("not found");
        return personal;
    }

    async verifyCell(cell:number) {
        if(await this.personalTrainerRepository.filterPersonalByCell(cell))
            throw new Error("this cell number is already registered");
    }

    async dtoToPersonal(dto:PersonalTrainerDTO){
        const personal = new PersonalTrainer(dto.name, dto.address, dto.cell);
        return personal;
    }
}