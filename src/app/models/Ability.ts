import { Species } from './Species';

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}
