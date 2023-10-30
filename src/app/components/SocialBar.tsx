import { urlFor } from '@/lib/sanityClient';
import getSocialLinks from '@/utils/getLinks';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  link: string;
  alt_text: string;
  image_file: Image;
}

function SocialIcon({
  alt_text,
  image_file,
  link,
}: Props): JSX.Element {
  return (
    <Link href={link} className="w-6 md:w-10 ">
      <Image
        fill
        src={urlFor(image_file).url()}
        alt={alt_text}
        className="!relative bg-slate-50 rounded-full !fill-red-600 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-95 animate-pulse"
      />
    </Link>
  );
}

export default async function SocialBar() {
  const data: SocialLink[] = await getSocialLinks();
  return (
    <div className="fixed left-3 md:left-5 bottom-0 z-30">
      <div className="flex flex-col  justify-center items-center ">
        {data?.map((item) => {
          return (
            <SocialIcon
              link={item.url}
              image_file={item.icon}
              alt_text={item.title}
              key={item._id}
            />
          );
        })}

        <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet" />
      </div>
    </div>
  );
}
