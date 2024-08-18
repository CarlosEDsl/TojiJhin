import { Route, Tags, Controller, Post, Body, Res, TsoaResponse, Put, Delete, Get, Path } from "tsoa";
import { BasicResponseDto } from "../models/dtos/BasicResponseDTO";
import { WorkoutDTO } from "../models/dtos/WorkoutDTO";
import { WorkoutService } from "../services/WorkoutService";
import path from "path";

@Route("workout")
@Tags("Workout")
export class WorkoutController extends Controller {
    workoutService = new WorkoutService();

    @Post()
    async createWorkout(
        @Body() workout: WorkoutDTO,
        @Res() success: TsoaResponse<201, BasicResponseDto>,
        @Res() fail: TsoaResponse<400, BasicResponseDto>
    ): Promise<void> {
        try {
            const newWorkout = await this.workoutService.registerWorkout(workout);
            return success(201, new BasicResponseDto("Successfully created", newWorkout));
        } catch (err: any) {
            console.error("Error in createWorkout:", err.message);
            return fail(400, new BasicResponseDto(err.message, undefined));
        }
    }

    @Put()
    async updateWorkout(
        @Body() workout: WorkoutDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const updatedWorkout = await this.workoutService.editWorkout(workout);
            return success(200, new BasicResponseDto("Successfully updated", updatedWorkout));
        } catch (err: any) {
            console.error("Error in updateWorkout:", err.message);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Delete()
    async deleteWorkout(
        @Body() workout: WorkoutDTO,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            await this.workoutService.deleteWorkout(workout);
            return success(200, new BasicResponseDto("Successfully deleted", undefined));
        } catch (err: any) {
            console.error("Error in deleteWorkout:", err.message);
            return fail(404, new BasicResponseDto(err.message, undefined));
        }
    }

    @Get("id/{id}")
    async findWorkout(
        @Path() id: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workout = await this.workoutService.findWorkout(id);
            if (!workout) {
                return fail(404, new BasicResponseDto("Workout not found", undefined));
            }
            return success(200, new BasicResponseDto("Successfully found", workout));
        } catch (err: any) {
            console.error("Error in findWorkout:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all/trainee/{traineeId}")
    async findAllWorkoutsFromTrainee(
        @Path() traineeId: number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workouts = await this.workoutService.getAllWorkoutFromTrainee(traineeId);
            return success(200, new BasicResponseDto("Successfully found", workouts));
        } catch (err: any) {
            console.error("Error in findAllWorkouts:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all/personal/{personalId}")
    async findAllWorkoutsFromPersonal(
        @Path() personalId:number,
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workouts = await this.workoutService.getAllWorkoutFromPersonal(personalId);
            return success(200, new BasicResponseDto("Successfully found", workouts));
        } catch (err: any) {
            console.error("Error in findAllWorkouts:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }

    @Get("all")
    async findAllWorkouts(
        @Res() success: TsoaResponse<200, BasicResponseDto>,
        @Res() fail: TsoaResponse<404, BasicResponseDto>
    ): Promise<void> {
        try {
            const workouts = await this.workoutService.getAllWorkout();
            return success(200, new BasicResponseDto("Successfully found", workouts));
        } catch (err: any) {
            console.error("Error in findAllWorkouts:", err.message);
            return fail(404, new BasicResponseDto("Error on search", err.message));
        }
    }
}
