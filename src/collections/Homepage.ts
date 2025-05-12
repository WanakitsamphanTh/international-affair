import type { CollectionConfig } from 'payload';
import { hero } from '@/collections/fields/Hero'

export const Homepage: CollectionConfig = {
  slug: 'homepage',
  fields: [
    hero,
    {
      name: 'tags',
      type: 'select',
      options: [
        {
          value: 'en',
          label: 'English',
        },
        {
          value: 'ja',
          label: 'Japanese',
        },
      ],
      defaultValue: 'en',
      required: true,
    }
  ],
}