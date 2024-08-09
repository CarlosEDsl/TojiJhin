import { Controller, Get, Route, Tags, Path, Post, Body } from 'tsoa';
import { Trainee } from '../models/Trainee';

@Route('trainees')
@Tags('Trainees')
export class TraineeController extends Controller {
  private trainees: Trainee[] = [];

  @Get('/')
  public async getAllTrainees(): Promise<Trainee[]> {
    return this.trainees;
  }

  @Get('{id}')
  public async getTrainee(@Path() id: number): Promise<Trainee> {
    return this.trainees.find(trainee => trainee.id === id) as Trainee;
  }

  @Post('/')
  public async createTrainee(@Body() trainee: Trainee): Promise<Trainee> {
    this.trainees.push(trainee);
    return trainee;
  }
}
