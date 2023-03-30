import { CaretLeft, CaretRight } from 'phosphor-react';
import { ReactNode } from 'react';

interface Images {
  childrenList: string[] | HTMLElement[] | ReactNode[];
}

export default function HorizontalScroll({ childrenList }: Images) {
  const slideLeft = () => {
    const slider = document.querySelector('#slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider = document.querySelector('#slider');
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <section className='bg-dp_light-200 py-1 md:py-6'>
      <h2 className='text-center text-lg font-semibold text-dp_blue-800 lg:text-2xl'>
        Nossos clientes
      </h2>

      <div className='relative flex items-center'>
        <CaretLeft
          onClick={slideLeft}
          className='cursor-pointer text-dp_light-100 opacity-50 hover:opacity-100 max-[768px]:hidden'
        />

        <div
          id='slider'
          className='scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide md:flex md:justify-center lg:my-4'
        >
          {childrenList!.map((item, index) => {
            const dir = '/images/clients/' + item;

            return (
              <span
                className='inline-block h-14 w-28 lg:mx-1 lg:h-36 lg:w-64'
                key={index}
              >
                <img
                  className='h-full w-full rounded-xl object-cover p-2 duration-150 ease-in hover:scale-110'
                  src={dir}
                  key={index}
                />
              </span>
            );
          })}
        </div>

        <CaretRight
          onClick={slideRight}
          className='cursor-pointer text-dp_light-100 hover:opacity-100 max-[768px]:hidden'
        />
      </div>
    </section>
  );
}
