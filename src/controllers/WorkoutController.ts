import { Controller, Get, Route, Tags, Path, Post, Body } from 'tsoa';
import { Workout } from '../models/Workout';

@Route('workouts')
@Tags('Workouts')
export class WorkoutController extends Controller {
  private workouts: Workout[] = [];

  @Get('/')
  public async getAllWorkouts(): Promise<Workout[]> {
    return this.workouts;
  }

  @Get('{id}')
  public async getWorkout(@Path() id: number): Promise<Workout> {
    return this.workouts.find(workout => workout.id === id) as Workout;
  }

  @Post('/')
  public async createWorkout(@Body() workout: Workout): Promise<Workout> {
    this.workouts.push(workout);
    return workout;
  }
}
