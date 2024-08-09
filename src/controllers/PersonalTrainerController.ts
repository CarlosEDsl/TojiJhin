import { Controller, Get, Route, Tags, Path, Post, Body } from 'tsoa';
import { PersonalTrainer } from '../models/PersonalTrainer';

@Route('personal-trainers')
@Tags('Personal Trainers')
export class PersonalTrainerController extends Controller {
  private trainers: PersonalTrainer[] = [];

  @Get('/')
  public async getAllPersonalTrainers(): Promise<PersonalTrainer[]> {
    return this.trainers;
  }

  @Get('{id}')
  public async getPersonalTrainer(@Path() id: number): Promise<PersonalTrainer> {
    return this.trainers.find(trainer => trainer.id === id) as PersonalTrainer;
  }

  @Post('/')
  public async createPersonalTrainer(@Body() trainer: PersonalTrainer): Promise<PersonalTrainer> {
    this.trainers.push(trainer);
    return trainer;
  }
}
