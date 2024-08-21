import { PersonalTrainerDTO } from './../models/dtos/PersonalTrainerDTO';
import { PersonalTrainer } from '../models/PersonalTrainer';
import { PersonalTrainerRepository } from '../repositories/PersonalTrainerRepository';
export class PersonalTrainerService {

    personalTrainerRepository:PersonalTrainerRepository = new PersonalTrainerRepository();

    async registerPersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.dtoToPersonal((personalDTO));

        try{
            await this.verifyCell(personal.cell);
        } catch(err) {
            throw err;
        }

        try {
            return this.personalTrainerRepository.insertPersonal(personal);
        } catch(err) {
            throw err;
        }
    }

    async editPersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.dtoToPersonal(personalDTO);
        personal.id = personalDTO.id || 0;  

        if(!await this.personalTrainerRepository.filterPersonalById(personal.id))
            throw new Error("personal not found");

        if(personal.cell != (await this.personalTrainerRepository.filterPersonalById(personal.id)).cell) {
            try{
                await this.verifyCell(personal.cell);
            } catch(err) {
                throw err;
            }
        }

        try {
            return this.personalTrainerRepository.updatePersonal(personal);
        } catch(err) {
            throw err;
        }
    }

    async deletePersonal(personalDTO:PersonalTrainerDTO) {
        const personal = await this.personalTrainerRepository.filterPersonalById(personalDTO.id || 0);
        if(!personal)
            throw new Error("personal not found");
        if(personal.cell != personalDTO.cell || personal.name != personalDTO.name || personal.address != personalDTO.address)
            throw new Error("data don't match");
        try {
            return await this.personalTrainerRepository.deletePersonal(personal);
        } catch(err) {
            throw err;
        }
    }

    async findPersonal(id:number) {
        const personal = await this.personalTrainerRepository.filterPersonalById(id);
        if(!personal)
            throw new Error("not found");
        return personal;
    }

    async getAllPersonal() {
        try {
            return await this.personalTrainerRepository.filterAllPersonal();
        } catch(err) {
            throw err;
        }
    }

    private async verifyCell(cell:number) {
        if(await this.personalTrainerRepository.filterPersonalByCell(cell))
            throw new Error("this cell number is already registered");
    }

    private async dtoToPersonal(dto:PersonalTrainerDTO){
        const personal = new PersonalTrainer(dto.name, dto.address, dto.cell);
        return personal;
    }
}