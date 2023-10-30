'use server';

import { MyFormData } from '@/app/components/Contact';
import prisma from '@/app/db';
import { revalidatePath } from 'next/cache';

export async function postEntry(formData: MyFormData) {
  'use server';
  try {
    const data = await prisma.guestbook.create({
      data: {
        body: formData.body as string,
        username: formData.name as string,
        email: formData.email as string,
      },
    });

    revalidatePath('/guestbook');
    return { success: true, data: data };
  } catch (error) {
    console.error('Error posting entry:', error);

    return {
      success: false,
      error: 'An error occurred while posting the entry',
    };
  }
}
