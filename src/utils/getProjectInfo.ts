'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getProjectInfo(id: string) {
  // 'use server';

  const query = groq`*[_type == "project" && _id == '03672a67-180d-4662-9ca5-5bafe2b199cf'] {
  ...,technologies[]->
}`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getProjectInfo;
