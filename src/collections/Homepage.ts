import type { CollectionConfig } from 'payload';
import { hero } from '@/collections/fields/Hero'

export const Homepage: CollectionConfig = {
  slug: 'homepage',
  fields: [
    hero,
  ],
}