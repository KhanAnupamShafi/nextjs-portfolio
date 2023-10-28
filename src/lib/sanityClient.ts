import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import { cache } from 'react';

const apiVersion = '2023-01-01';

export const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion,
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export const clientFetch = cache(client.fetch.bind(client));

export const urlFor = (source: any) => {
  if (source) {
    return builder.image(source);
  }

  // Handle the case when source is undefined
  // You can return a default image URL or an empty string, for example.
  return builder.image(
    'image-4a97235c619c96e7a93a2ab2854ba69f6b4303b9-750x450-jpg'
  );
};
