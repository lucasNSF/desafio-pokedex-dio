import { Species } from './Species';
import { VersionDetail } from './VersionDetail';

export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}
