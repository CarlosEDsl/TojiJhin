import { Route, Tags, Controller, Post, Body, Res, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { BasicResponseDto } from "../models/dtos/BasicResponseDTO";
import { PersonalTrainerDTO } from "../models/dtos/PersonalTrainerDTO";
import { PersonalTrainerService } from "../services/PersonalTrainerService";

@Route("personal-trainer")
@Tags("PersonalTrainer")
export class PersonalTrainerController extends Controller {
    personalTrainerService = new PersonalTrainerService();

    @Post()
    async createPersonalTrainer(
        @Body() personalTrainer: PersonalTrainerDTO,
        @Res() success: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ): Promise<void> {
        try {
            const newPersonalTrainer = await this.personalTrainerService.registerPersonal(personalTrainer);
            return success(201, new BasicResponseDto("Successfully created", newPersonalTrainer));
        } catch (err: any) {
            console.error("Error in createPersonalTrainer:", err.message);
            return fail(400, new BasicResponseDto(err.message, undefined));
        }
    }

    @Put()
    async updatePersonalTrainer(
        @Body() personalTrainer: PersonalTrainerDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const updatedPersonalTrainer = await this.personalTrainerService.editPersonal(personalTrainer);
            return success(200, new BasicResponseDto("Successfully updated", updatedPersonalTrainer));
        } catch (err: any) {
            console.error("Error in updatePersonalTrainer:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Delete()
    async deletePersonalTrainer(
        @Body() personalTrainer: PersonalTrainerDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.personalTrainerService.deletePersonal(personalTrainer);
            return success(200, new BasicResponseDto("Successfully deleted", undefined));
        } catch (err: any) {
            console.error("Error in deletePersonalTrainer:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Get("id/{id}")
    async findPersonalTrainer(
        @Path() id: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const personalTrainer = await this.personalTrainerService.findPersonal(id);
            if (!personalTrainer) {
                return fail(404, new BasicResponseDto("Personal Trainer not found", undefined));
            }
            return success(200, new BasicResponseDto("Successfully found", personalTrainer));
        } catch (err: any) {
            console.error("Error in findPersonalTrainer:", err);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all")
    async findAllPersonalTrainers(
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const personalTrainers = await this.personalTrainerService.getAllPersonal();
            return success(200, new BasicResponseDto("Successfully found", personalTrainers));
        } catch (err: any) {
            console.error("Error in findAllPersonalTrainers:", err);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }
}
