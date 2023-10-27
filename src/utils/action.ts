'use server';

import { MyFormData } from '@/app/components/Contact';
import prisma from '@/app/db';
import { revalidatePath } from 'next/cache';

export async function postEntry(formData: MyFormData) {
  'use server';

  const data = await prisma.guestbook.create({
    data: {
      body: formData.body as string,
      username: formData.name as string,
      email: formData.email as string,
    },
  });
  return { success: true, data: data };

  revalidatePath('/guestbook');
}
