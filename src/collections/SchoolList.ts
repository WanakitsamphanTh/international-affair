import type { CollectionConfig } from "payload";

export const SchoolList: CollectionConfig = {
  slug: 'school-list',
  fields: [
    {
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'highlight',
      label: 'Highlight Section',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media', 
    },
    {
      name: 'Agreements',
      label: 'University Agreements',
      type: 'array',
      fields: [
        {
          name: 'country_jp',
          label: 'Country (Japanese)',
          type: 'text',
          required: true,
        },
        {
          name: 'country_en',
          label: 'Country (English)',
          type: 'text',
          required: true,
        },
        {
          name: 'universities',
          label: 'Universities',
          type: 'array',
          fields: [
            {
              name: 'name_jp',
              label: 'University Name (Japanese)',
              type: 'text',
              required: true,
            },
            {
              name: 'name_en',
              label: 'University Name (English)',
              type: 'text',
              required: true,
            },
            {
              name: 'agreement_dates',
              label: 'Agreement Dates',
              type: 'date',
              required: true,
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
    },
  ],
}