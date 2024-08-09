// src/models/Trainee.ts

export class Trainee {
    private _id: number;
    private _name: string;
    private _age: number;
    private _address: string;
    private _cell: string;
    private _description: string;
  
    constructor(id: number, name: string, age: number, address: string, cell: string, description: string) {
      this._id = id;
      this._name = name;
      this._age = age;
      this._address = address;
      this._cell = cell;
      this._description = description;
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
  
    get age(): number {
      return this._age;
    }
  
    set age(value: number) {
      this._age = value;
    }
  
    get address(): string {
      return this._address;
    }
  
    set address(value: string) {
      this._address = value;
    }
  
    get cell(): string {
      return this._cell;
    }
  
    set cell(value: string) {
      this._cell = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  }
  