import { Ability } from './Ability';
import { GameIndex } from './GameIndex';
import { HeldItem } from './HeldItems';
import { Move } from './Move';
import { Species } from './Species';
import { Sprites } from './Sprites';
import { Stat } from './Stat';
import { Type } from './Type';

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
