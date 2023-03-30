export function ContentsSummary() {
  return (
    <section className='flex h-44 items-center justify-center lg:h-auto lg:flex-col lg:bg-dp_light-100 lg:py-7 lg:px-32'>
      <div className='relative h-full w-full max-w-6xl lg:mb-4 lg:flex lg:flex-row-reverse lg:items-center'>
        <div className='w-full overflow-hidden rounded-md'>
          <img
            src='./images/home/content_1.jpg'
            className='absolute m-auto h-44 w-full rounded-md object-cover duration-150 ease-in lg:static lg:hover:scale-110'
            alt='imagem de um drone sobrevoando uma colina'
          />
        </div>
        <h3 className='absolute inset-x-0 top-0 text-center text-xl font-semibold text-dp_light-100 lg:w-1/2 lg:text-dp_blue-800'>
          Content 1
        </h3>
        <p className='absolute bottom-0 w-full truncate bg-slate-900/75 py-1 text-center text-dp_light-100 md:whitespace-normal lg:static lg:bg-dp_light-100 lg:text-dp_blue-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          veritatis ex saepe perferendis asperiores suscipit impedit laudantium
          nobis voluptatibus laboriosam tempore obcaecati harum accusantium
          libero at, nisi reiciendis placeat quae.
        </p>
      </div>

      <div className='relative h-full w-full max-w-6xl lg:flex lg:items-center'>
        <div className='w-full overflow-hidden rounded-md'>
          <img
            src='./images/home/content_2.jpg'
            className='absolute m-auto h-44 w-full rounded-md object-cover duration-150 ease-in lg:static lg:hover:scale-110'
            alt='foto tirada da frente de um drone em voo'
          />
        </div>
        <h3 className='absolute inset-x-0 top-0 text-center text-xl font-semibold text-dp_light-100 lg:ml-[50%] lg:w-1/2 lg:text-dp_blue-800'>
          Content 2
        </h3>
        <p className='absolute bottom-0 w-full truncate bg-slate-900/75 py-1 text-center text-dp_light-100 md:whitespace-normal lg:static lg:bg-dp_light-100 lg:text-dp_blue-800'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          veritatis ex saepe perferendis asperiores suscipit impedit laudantium
          nobis voluptatibus laboriosam tempore obcaecati harum accusantium
          libero at, nisi reiciendis placeat quae.
        </p>
      </div>
    </section>
  );
}
