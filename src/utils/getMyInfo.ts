'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getMyInfo() {
  // 'use server';

  const query = groq`*[_type == "personalInfo"]{
  ...,
}`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getMyInfo;
