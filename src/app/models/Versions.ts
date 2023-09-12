import { GenerationI } from './generations/GenerationI';
import { GenerationII } from './generations/GenerationII';
import { GenerationIII } from './generations/GenerationIII';
import { GenerationIV } from './generations/GenerationIV';
import { GenerationV } from './generations/GenerationV';
import { GenerationVII } from './generations/GenerationVII';
import { GenerationVIII } from './generations/GenerationVIII';
import { Home } from './generations/Home';

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationII;
  'generation-iii': GenerationIII;
  'generation-iv': GenerationIV;
  'generation-v': GenerationV;
  'generation-vi': { [key: string]: Home };
  'generation-vii': GenerationVII;
  'generation-viii': GenerationVIII;
}
