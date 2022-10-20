import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetypes {
  Energy: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this.Energy = 'stamina';
    Ranger.counter += 1;
  }

  get energyType(): EnergyType {
    return this.Energy;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }
}