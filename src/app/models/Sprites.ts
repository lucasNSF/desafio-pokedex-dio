import { Other } from './Other';
import { Versions } from './Versions';

export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}
