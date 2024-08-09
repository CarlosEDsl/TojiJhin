import { Controller, Get, Route, Tags, Path, Post, Body } from 'tsoa';
import { Exercise } from '../models/Exercise';

@Route('exercises')
@Tags('Exercises')
export class ExerciseController extends Controller {
  private exercises: Exercise[] = [];

  @Get('/')
  public async getAllExercises(): Promise<Exercise[]> {
    return this.exercises;
  }

  @Get('{id}')
  public async getExercise(@Path() id: number): Promise<Exercise> {
    return this.exercises.find(exercise => exercise.id === id) as Exercise;
  }

  @Post('/')
  public async createExercise(@Body() exercise: Exercise): Promise<Exercise> {
    this.exercises.push(exercise);
    return exercise;
  }
}
