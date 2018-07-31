import { Hit } from '../models/Hit';

export interface Article {
   hits: Hit[],
   nbHits: number,
   page: number,
   nbPages: number
}
