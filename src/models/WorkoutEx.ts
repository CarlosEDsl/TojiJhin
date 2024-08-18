import { Exercise } from "./Exercise";

export class WorkoutEx {
    private _workoutId: number;
    private _exerciseId:number;
    private _bench: number;
    private _repetitions: string;
    private _priority: number;
    

    constructor(workoutId:number, exerciseId:number, bench:number, repetitions:string, priority:number) {
        this._exerciseId = exerciseId;
        this._bench = bench;
        this._repetitions = repetitions;
        this._workoutId = workoutId;
        this._priority = priority;
    }

    get exerciseId(): number {
        return this._exerciseId;
    }

    set exerciseId(value: number) {
        this._exerciseId = this.exerciseId;
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
    
    get repetitions(): string {
        return this._repetitions;
    }
    
    set repetitions(value: string) {
        this._repetitions = value;
    }
    
    get workoutId(): number {
        return this._workoutId;
    }
    
    set workoutId(value: number) {
        this._workoutId = value;
    }
}