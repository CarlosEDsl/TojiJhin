import { Exercise } from "./Exercise";

export class WorkoutEx {
    private _id_workout: number;
    private _exerciseId:number;
    private _bench: number;
    private _repetitions: number;
    private _priority: number;
    

    constructor(id_workout:number, exerciseId:number, bench:number, repetitions:number, priority:number) {
        this._exerciseId = exerciseId;
        this._bench = bench;
        this._repetitions = repetitions;
        this._id_workout = id_workout;
        this._priority = priority;
    }

    get exercise(): number {
        return this._exerciseId;
    }

    set exercise(value: number) {
        this._exerciseId = this.exercise;
    }

    get priority(): number {
        return this._priority;
    }

    set priority(value: number) {
        this._priority = value;
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