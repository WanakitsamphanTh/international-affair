import type { CollectionConfig } from 'payload';

const CountryData: { [key: string]: string } = {
  "Thailand": "TH",
  "France": "FR",
  "Finland": "FI",
  "Taiwan": "TW",
  "South Korea": "KR",
  "Germany": "DE",
  "Kazakhstan": "KZ"
};

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'country',
      type: 'select', // Dropdown field type
      label: 'Country',
      options: Object.keys(CountryData).map((key) => ({
        label: key, // Display country name in Japanese
        value: CountryData[key], // Country code (TH, FR, etc.)
      })),
    },
    {
      name: 'profile',
      type: 'upload',
      relationTo: 'media', // Make sure you have a media collection for handling uploads
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'tag',
      type: 'select', // Dropdown field type for language selection
      label: 'Tag',
      options: [
        {
          label: 'English',
          value: 'en',
        },
        {
          label: 'Japanese',
          value: 'ja',
        },
      ],
      defaultValue: 'en', // Default language is set to English
    },
  ],
};
