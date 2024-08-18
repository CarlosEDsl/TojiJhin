import { Route, Tags, Controller, Post, Body, Res, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { ExerciseDTO } from "../models/dtos/ExerciseDTO";
import { ExerciseService } from "../services/ExerciseService";
import { BasicResponseDto } from "../models/dtos/BasicResponseDTO";

@Route("exercise")
@Tags("Exercise")
export class ExerciseController extends Controller {
    exerciseService = new ExerciseService();

    @Post()
    async createExercise(
        @Body() exercise: ExerciseDTO,
        @Res() success: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ): Promise<void> {
        try {
            const newExercise = await this.exerciseService.registerExercise(exercise);
            return success(201, new BasicResponseDto("Successfully created", newExercise));
        } catch (err: any) {
            console.error("Error in createExercise:", err.message);
            return fail(400, new BasicResponseDto(err.message, undefined));
        }
    }

    @Put()
    async updateExercise(
        @Body() exercise: ExerciseDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const updatedExercise = await this.exerciseService.editExercise(exercise);
            return success(200, new BasicResponseDto("Successfully updated", updatedExercise));
        } catch (err: any) {
            console.error("Error in updateExercise:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Delete()
    async deleteExercise(
        @Body() exercise: ExerciseDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.exerciseService.deleteExercise(exercise);
            return success(200, new BasicResponseDto("Successfully deleted", undefined));
        } catch (err: any) {
            console.error("Error in deleteExercise:", err);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Get("id/{id}")
    async findExercise(
        @Path() id: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const exercise = await this.exerciseService.findExercise(id);
            if (!exercise) {
                return fail(404, new BasicResponseDto("Exercise not found", undefined));
            }
            return success(200, new BasicResponseDto("Successfully found", exercise));
        } catch (err: any) {
            console.error("Error in findExercise:", err);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all")
    async findAllExercises(
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const exercises = await this.exerciseService.getAllExercise();
            return success(200, new BasicResponseDto("Successfully found", exercises));
        } catch (err: any) {
            console.error("Error in findAllExercises:", err);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }
}
