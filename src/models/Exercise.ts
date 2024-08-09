// src/models/Exercise.ts

export class Exercise {
    private _id: number;
    private _name: string;
    private _description: string;
    private _bench: number;
    private _repetitions: number;
    private _id_workout: number;
  
    constructor(id: number, name: string, description: string, bench: number, repetitions: number, id_workout: number) {
      this._id = id;
      this._name = name;
      this._description = description;
      this._bench = bench;
      this._repetitions = repetitions;
      this._id_workout = id_workout;
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
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  
    get bench(): number {
      return this._bench;
    }
  
    set bench(value: number) {
      this._bench = value;
    }
  
    get repetitions(): number {
      return this._repetitions;
    }
  
    set repetitions(value: number) {
      this._repetitions = value;
    }
  
    get id_workout(): number {
      return this._id_workout;
    }
  
    set id_workout(value: number) {
      this._id_workout = value;
    }
  }
  