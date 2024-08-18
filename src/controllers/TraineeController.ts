import { Route, Tags, Controller, Post, Body, Res, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { BasicResponseDto } from "../models/dtos/BasicResponseDTO";
import { TraineeDTO } from "../models/dtos/TraineeDTO";
import { TraineeService } from "../services/TreineeService";

@Route("trainee")
@Tags("Trainee")
export class TraineeController extends Controller {
    traineeService = new TraineeService();

    @Post()
    async createTrainee(
        @Body() trainee: TraineeDTO,
        @Res() success: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ): Promise<void> {
        try {
            const newTrainee = await this.traineeService.insertTrainee(trainee);
            return success(201, new BasicResponseDto("Successfully created", newTrainee));
        } catch (err: any) {
            console.error("Error in createTrainee:", err.message);
            return fail(400, new BasicResponseDto(err.message, undefined));
        }
    }

    @Put()
    async updateTrainee(
        @Body() trainee: TraineeDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const updatedTrainee = await this.traineeService.editTrainee(trainee);
            return success(200, new BasicResponseDto("Successfully updated", updatedTrainee));
        } catch (err: any) {
            console.error("Error in updateTrainee:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Delete()
    async deleteTrainee(
        @Body() trainee: TraineeDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.traineeService.deleteTrainee(trainee);
            return success(200, new BasicResponseDto("Successfully deleted", undefined));
        } catch (err: any) {
            console.error("Error in deleteTrainee:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Get("id/{id}")
    async findTrainee(
        @Path() id: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const trainee = await this.traineeService.findTrainee(id);
            return success(200, new BasicResponseDto("Successfully found", trainee));
        } catch (err: any) {
            console.error("Error in findTrainee:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all")
    async findAllTrainees(
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const trainees = await this.traineeService.getAllTrainee();
            return success(200, new BasicResponseDto("Successfully found", trainees));
        } catch (err: any) {
            console.error("Error in findAllTrainees:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }
}