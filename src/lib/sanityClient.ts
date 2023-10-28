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

export const urlFor = (source: any) => builder.image(source);
