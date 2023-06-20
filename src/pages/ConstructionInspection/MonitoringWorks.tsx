import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageModal from '../../components/ImageModal';

export default function MonitoringWorks() {
  let [isOpen, setIsOpen] = useState(false);

  let url = 'https://source.unsplash.com/featured';

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className='relative h-full min-h-screen bg-dp_light-100'>
      <ImageModal closeModal={closeModal} isOpen={isOpen} url={url} />

      <Header />
      <main className='mx-auto max-w-6xl pb-6 lg:pb-24'>
        {/* NOTE - vídeos principais */}
        <section className='mx-9 mt-6 lg:mx-auto'>
          <h1 className='py-4 text-center text-4xl font-semibold text-dp_blue-800'>
            Acompanhamento de obras
          </h1>

          <div
            id='videos'
            className='grid grid-cols-3 justify-items-center gap-3 lg:grid-cols-7 lg:grid-rows-3 lg:gap-2'
          >
            <iframe
              src='https://www.youtube.com/embed/xcp7ViC1uWI'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='col-span-3 aspect-video w-full rounded-md lg:col-span-5 lg:row-span-3 lg:h-auto lg:w-full lg:self-center'
            ></iframe>

            <iframe
              src='https://www.youtube.com/embed/qfp8b1e9vIk'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='aspect-square w-24 rounded-md lg:col-span-2 lg:row-span-1 lg:aspect-video lg:w-auto lg:justify-self-end'
            ></iframe>
            <iframe
              src='https://www.youtube.com/embed/Pd4tVUBcfTo'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='aspect-square w-24 rounded-md lg:col-span-2 lg:row-span-1 lg:aspect-video lg:w-auto lg:justify-self-end'
            ></iframe>
            <iframe
              src='https://www.youtube.com/embed/WZkpS7gDQiU'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              className='aspect-square w-24 rounded-md lg:col-span-2 lg:row-span-1 lg:aspect-video lg:w-auto lg:justify-self-end'
            ></iframe>
          </div>
        </section>

        {/* TODO - texto explicativo */}
        <section className='my-8 border-y border-dp_orange-900 px-8 py-4 lg:my-20 lg:border-0 lg:py-0'>
          <h1 className='text-center text-4xl font-semibold text-dp_blue-800'>
            Texto sobre o acompanhamento de obras
          </h1>
          <div id='text' className='mt-6 text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, recusandae sint libero error quo, consequatur odit
            quibusdam debitis quos commodi earum iure unde ut? Laudantium ut non
            quibusdam? Vitae, ut.
          </div>
        </section>

        {/* TODO - trabalhos recentes */}
        <section className='mb-4 px-5 lg:px-0'>
          <h1 className='mb-6 text-center text-4xl font-semibold text-dp_blue-800'>
            Trabalhos recentes
          </h1>

          <div
            id='recent-jobs'
            className='grid grid-cols-3 place-items-center gap-y-2 lg:grid-cols-4'
          >
            {[200, 300, 400, 500, 600, 700, 800, 900].map((item) => {
              if (item === 800 || item === 900) {
                let a = `aspect-square border border-black h-20 w-20 rounded-lg lg:h-32 lg:w-32 hidden lg:block`;
                return (
                  <button
                    type='button'
                    className='cursor-pointer'
                    onClick={openModal}
                  >
                    <img src={url} alt='aa' className={a} />
                  </button>
                );
              } else {
                let b = `aspect-square border border-black h-20 w-20 rounded-lg lg:h-32 lg:w-32`;
                return (
                  <button
                    type='button'
                    className='cursor-pointer'
                    onClick={openModal}
                  >
                    <img src={url} alt='aa' className={b} />
                  </button>
                );
              }
            })}
          </div>
        </section>
      </main>

      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </section>
  );
}
