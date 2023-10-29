'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getMySkills() {
  // 'use server';

  const query = groq`*[_type == "skill"]`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getMySkills;
