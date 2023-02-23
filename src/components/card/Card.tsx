import Image, { StaticImageData } from 'next/image';

interface Props {
  name: string;
  image: StaticImageData;
  description: string;
  gradient?: string;
}

export default function Card({ name, image, description, gradient }: Props) {
  return (
    <section className='relative rounded-md shadow-lg shadow-slate-600/50 duration-150 ease-in hover:scale-[1.01]'>
      <div
        className={`absolute h-full w-full rounded-md bg-gradient-to-t ${
          gradient ? gradient : 'from-zinc-800/80'
        } via-slate-500/40 to-transparent`}
      ></div>
      <div className='absolute bottom-0 w-full text-center text-dp_light-100'>
        <p className='p-2 text-2xl font-bold transition duration-300 ease-in-out lg:text-3xl'>
          {name}
        </p>
        <button
          className={`mt-3 hidden w-full rounded-b-md border-t border-dp_orange-900 bg-dp_blue-800/80 py-2 text-lg font-semibold lg:inline-block`}
        >
          Saiba mais
        </button>
      </div>

      <Image
        src={image}
        alt={description}
        className='h-40 w-80 rounded-md object-cover lg:h-[512px] lg:w-[448px]'
      />
    </section>
  );
}
