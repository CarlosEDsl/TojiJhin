// src/models/PersonalTrainer.ts

export class PersonalTrainer {
    private _id: number;
    private _name: string;
    private _address: string;
    private _cell: number;
  
    constructor(name: string, address: string, cell: number, id?: number) {
      this._id = id || 0;
      this._name = name;
      this._address = address;
      this._cell = cell;
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
  }
  