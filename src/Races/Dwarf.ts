import Race from './Race';

export default class Dwarf extends Race {
  static counter = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.counter += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.counter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}