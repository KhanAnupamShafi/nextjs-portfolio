'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getMyExperience() {
  // 'use server';

  const query = groq`*[_type == "experience"]{
  ..., technologies[]->
}`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getMyExperience;
