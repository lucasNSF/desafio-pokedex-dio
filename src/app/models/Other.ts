import { DreamWorld } from './generations/DreamWorld';
import { Home } from './generations/Home';
import { OfficialArtwork } from './generations/OfficialArtwork';

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
}
