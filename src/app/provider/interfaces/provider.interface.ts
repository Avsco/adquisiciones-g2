import { item } from './item.interface';

export interface provider {
  id?: number;
  name: string;
  code: string;
  items?: item[];
}
