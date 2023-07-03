import Link from 'next/link';
import { tv } from 'tailwind-variants';

interface IndexCardProps {
  title: string;
  borderColor: string;
  link: string;
  bgImage: string;
}

const card = tv({
  slots: {
    wrapper:
      'h-full w-full lg:relative lg:bottom-12 lg:h-64 lg:w-80 lg:rounded-sm lg:outline lg:outline-1 lg:outline-offset-8',
    image:
      'h-full w-full flex items-end justify-center bg-cover bg-center duration-100 ease-in lg:rounded-md lg:hover:scale-105',
    titleClass: 'pb-3 text-center text-dp_light-100 lg:font-bold',
  },
});

const { wrapper, image, titleClass } = card();

export function IndexCard({
  bgImage,
  borderColor,
  link,
  title,
}: IndexCardProps) {
  return (
    <>
      <div className={`${wrapper()} ${borderColor}`}>
        <Link href={`${link}`} className='h-full w-full'>
          <div className={`${image()} ${bgImage}`}>
            <p className={titleClass()}>{title}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
