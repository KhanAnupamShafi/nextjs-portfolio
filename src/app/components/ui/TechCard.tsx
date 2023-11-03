import Image from 'next/image';
import Clip from '../../../assets/paper-clip.svg';
interface Props {
  heading: string;
  img: string;
  color: string;
}
export default function TechCard({
  img,
  heading,
  color,
}: Props): JSX.Element {
  return (
    <>
      <div className={`bg-${color}  rounded-lg p-2`}>
        <div className="absolute -top-3 -left-5 -z-10 rounded-full underline mb-2 font-semibold text-xl bg-transparent skew-x-12 h-10 w-12">
          <Image src={Clip} alt="" fill />
        </div>
        <div className="font-normal max-w-[390px] h-[184px]">
          <Image
            className="!relative object-contain"
            fill
            alt={heading}
            src={img}
          />
        </div>
      </div>
    </>
  );
}
