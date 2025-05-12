import { CollectionConfig } from 'payload';

export const VisaSteps: CollectionConfig = {
  slug: 'visa-steps',
  labels: {
    singular: 'Visa Step',
    plural: 'Visa Steps',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'File Check', value: 'FileCheck' },
        { label: 'File Pen Line', value: 'FilePenLine' },
        { label: 'Building', value: 'Building2' },
        { label: 'Plane', value: 'Plane' },
        { label: 'Hospital', value: 'Hospital' },
      ],
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  access: {
    read: () => true,
  },
};