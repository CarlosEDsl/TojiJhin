// src/models/Trainee.ts

export class Trainee {
    private _id: number;
    private _name: string;
    private _age: number;
    private _address: string;
    private _cell: number;
    private _description: string;
  
    constructor(name: string, age: number, cell: number, description?: string,  address?: string, id?: number) {
      this._id = id || 0;
      this._name = name;
      this._age = age;
      this._address = address || '';
      this._cell = cell;
      this._description = description || '';
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
  
    get cell(): number {
      return this._cell;
    }
  
    set cell(value: number) {
      this._cell = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  }
  