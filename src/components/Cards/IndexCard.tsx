import Link from 'next/link';

interface IndexCardProps {
  title: string;
  borderColor: string;
  link: string;
  bgImage: string;
}

export function IndexCard({
  bgImage,
  borderColor,
  link,
  title,
}: IndexCardProps) {
  return (
    <>
      <div
        className={`h-full w-full lg:relative lg:bottom-12 lg:h-64 lg:w-80 lg:rounded-sm lg:outline lg:outline-1 lg:outline-offset-8 lg:${borderColor}`}
      >
        <Link href={`${link}`} className='h-full w-full'>
          <div
            className={`flex h-full w-full items-end justify-center ${bgImage} bg-cover bg-center duration-100 ease-in lg:rounded-md lg:hover:scale-105`}
          >
            <p className='pb-3 text-center text-dp_light-100 lg:font-bold'>
              {title}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
