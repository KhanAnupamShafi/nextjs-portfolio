'use server';
import { clientFetch } from '@/lib/sanityClient';
import { groq } from 'next-sanity';

async function getSocialLinks() {
  // 'use server';

  const query = groq`*[_type == "link" && isVisible == true]{
  ...,
  // technologies[]->
}
| order(_createdAt asc)[0...5]`;

  const data = await clientFetch(query);
  // revalidatePath('/my-projects');
  return data;
}

export default getSocialLinks;
