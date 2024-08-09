// src/models/Workout.ts

export class Workout {
    private _id: number;
    private _name: string;
    private _finishDate: Date;
    private _description: string;
    private _id_trainee: number;
    private _id_personal: number;
  
    constructor(id: number, name: string, finishDate: Date, description: string, id_trainee: number, id_personal: number) {
      this._id = id;
      this._name = name;
      this._finishDate = finishDate;
      this._description = description;
      this._id_trainee = id_trainee;
      this._id_personal = id_personal;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }
  
    get finishDate(): Date {
      return this._finishDate;
    }
  
    set finishDate(value: Date) {
      this._finishDate = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  
    get id_trainee(): number {
      return this._id_trainee;
    }
  
    set id_trainee(value: number) {
      this._id_trainee = value;
    }
  
    get id_personal(): number {
      return this._id_personal;
    }
  
    set id_personal(value: number) {
      this._id_personal = value;
    }
  }
  