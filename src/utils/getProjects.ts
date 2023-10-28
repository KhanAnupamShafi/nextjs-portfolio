'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getProjects() {
  // 'use server';

  const query = groq`*[_type == "project"]{
  ...,
    "urlImage": image.asset->url,
  technologies[]->
}`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getProjects;
