'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getProjectInfo(id: string) {
  // 'use server';
  const query = groq`*[_type == "project" && _id == ${id}] {
  ...,technologies[]->
}`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getProjectInfo;
