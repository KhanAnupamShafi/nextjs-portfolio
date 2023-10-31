'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function geFeaturedProjects() {
  // 'use server';

  const query = groq`*[_type == "project"] {
  ...,technologies[]->,

}
| order(_createdAt asc)[0...4]`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default geFeaturedProjects;
