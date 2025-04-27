import type { CollectionConfig } from 'payload';
import { hero} from '@/fields/Hero';

export const Homepage: CollectionConfig = {
  slug: 'homepage',
  fields: [
    hero,
  ],
}