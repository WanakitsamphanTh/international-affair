import { FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Field } from "payload";

export const heroRichtext: Field = {
  name: 'heroRichtext',
  label: 'Hero Rich Text',
  type: 'richText',
  required: false,
  editor: lexicalEditor({
    features: ({defaultFeatures}) => [
      ...defaultFeatures,
      FixedToolbarFeature(),
    ]
  })
};

export const hero: Field = {
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
      required: false,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    }
  ],
}