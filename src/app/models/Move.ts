import { Species } from './Species';
import { VersionGroupDetail } from './VersionGroupDetail';

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}
