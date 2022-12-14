import { CaretLeft, CaretRight } from 'phosphor-react';

interface Images {
  imagesList: Array<string>;
}

export default function Clients({ imagesList }: Images) {
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
    <section className='bg-dp_light-200 py-1'>
      <h2 className='text-center text-lg font-semibold text-slate-900'>
        Nossos clientes
      </h2>

      <div className='relative flex items-center'>
        <CaretLeft
          onClick={slideLeft}
          className='cursor-pointer text-dp_light-100 opacity-50 hover:opacity-100 max-[768px]:hidden'
        />

        <div
          id='slider'
          className='scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'
        >
          {imagesList.map((item, index) => {
            const dir = '/images/clients/' + item;

            return (
              <span className='inline-block h-14 w-28' key={index}>
                <img
                  className='h-full w-full rounded-md object-cover p-2 hover:scale-110'
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
