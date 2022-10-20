import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetypes {
  Energy: EnergyType;
  static counter = 0;

  constructor(name: string) {
    super(name);
    this.Energy = 'mana';
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this.Energy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }
}