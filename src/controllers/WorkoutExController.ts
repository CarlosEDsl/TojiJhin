import { Route, Tags, Controller, Post, Body, Res, TsoaResponse, Put, Delete, Get, Path, Query } from "tsoa";
import { BasicResponseDto } from "../models/dtos/BasicResponseDTO";
import { WorkoutExDTO } from "../models/dtos/WorkoutExDTO";
import { WorkoutExService } from "../services/WorkoutExService";

@Route("workout-ex")
@Tags("WorkoutEx")
export class WorkoutExController extends Controller {
    workoutExService = new WorkoutExService();

    @Post()
    async createWorkoutEx(
        @Body() workoutEx: WorkoutExDTO,
        @Res() success: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ): Promise<void> {
        try {
            const newWorkoutEx = await this.workoutExService.insertExInWorkout(workoutEx);
            return success(201, new BasicResponseDto("Successfully created", newWorkoutEx));
        } catch (err: any) {
            console.error("Error in createWorkoutEx:", err.message);
            return fail(400, new BasicResponseDto(err.message, undefined));
        }
    }

    @Put()
    async updateWorkoutEx(
        @Body() workoutEx: WorkoutExDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const updatedWorkoutEx = await this.workoutExService.editWorkoutEx(workoutEx);
            return success(200, new BasicResponseDto("Successfully updated", updatedWorkoutEx));
        } catch (err: any) {
            console.error("Error in updateWorkoutEx:", err.message);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Delete()
    async deleteWorkoutEx(
        @Body() workoutEx: WorkoutExDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.workoutExService.deleteWorkoutEx(workoutEx);
            return success(200, new BasicResponseDto("Successfully deleted", undefined));
        } catch (err: any) {
            console.error("Error in deleteWorkoutEx:", err.message);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Get()
    async findExercise(
        @Query() workoutId: number,
        @Query() exerciseId: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workoutEx = await this.workoutExService.getWorkoutEx(workoutId, exerciseId);
            return success(200, new BasicResponseDto("Successfully found", workoutEx));
        } catch (err: any) {
            console.error("Error in findWorkoutEx:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("workout/{workoutId}")
    async getExercisesByWorkout(
        @Path() workoutId: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workoutEx = await this.workoutExService.getWorkoutAllEx(workoutId);
            return success(200, new BasicResponseDto("Successfully found", workoutEx));
        } catch (err: any) {
            console.error("Error in findWorkoutEx:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }
}
