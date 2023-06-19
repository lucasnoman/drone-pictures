import fsPromises from 'fs/promises';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/file'), { ssr: false });

interface VideosProps {
  listOfVideos: string[] | ReactNode[];
}

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    handleWindowSizeChange();

    // NOTE - habilitar isso fará a função ser chamada sempre que a tela mudar de tamanho
    // window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width;
}

export default function MonitoringWorks({ listOfVideos }: VideosProps) {
  const dir =
    '/images/construction_inspection/building_inspection/monitoring_of_works/videos/';
  const dir2 =
    '/images/construction_inspection/building_inspection/monitoring_of_works/thumbs/';
  const drone0 =
    '/images/construction_inspection/building_inspection/monitoring_of_works/videos/drone0.mp4';
  const drone0p =
    '/images/construction_inspection/building_inspection/monitoring_of_works/videos/drone0.png';

  return (
    <section className='relative h-full min-h-screen bg-dp_light-100'>
      <Header />
      <main className='mx-auto max-w-6xl pb-6 lg:pb-24'>
        <section className='mt-6 border border-black'>
          <h1 className='py-4 text-center text-4xl font-semibold text-dp_blue-800'>
            Acompanhamento de obras
          </h1>

          <div id='videos' className='grid gap-2 lg:grid-cols-3 lg:grid-rows-3'>
            <iframe
              src='https://www.youtube.com/embed/xcp7ViC1uWI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
              // className='aspect-video h-auto w-full rounded-lg lg:col-span-2'
              className='aspect-video h-full self-center lg:col-span-2 lg:row-span-3'
            ></iframe>

            <iframe
              src='https://www.youtube.com/embed/xcp7ViC1uWI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
              className='col-span-1 row-span-1 aspect-video justify-self-end'
            ></iframe>
            <iframe
              src='https://www.youtube.com/embed/xcp7ViC1uWI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
              className='col-span-1 row-span-1 aspect-video justify-self-end'
            ></iframe>
            <iframe
              src='https://www.youtube.com/embed/xcp7ViC1uWI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
              className='col-span-1 row-span-1 aspect-video justify-self-end'
            ></iframe>
          </div>
        </section>

        {/* TODO - texto explicativo */}
        <section className='my-20'>
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
        <section className='mb-4'>
          <h1 className='mb-6 text-center text-4xl font-semibold text-dp_blue-800'>
            Trabalhos recentes
          </h1>
          <div
            id='recent-jobs'
            className='grid grid-cols-4 place-items-center gap-y-2 border border-green-500'
          >
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-200'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-300'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-400'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-600'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-600'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-700'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-800'></div>
            <div className='aspect-square h-20 w-20 rounded-lg bg-teal-900'></div>
          </div>
        </section>
      </main>

      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </section>
  );
}

export async function getStaticProps() {
  const dir2 =
    'public/images/construction_inspection/building_inspection/monitoring_of_works/thumbs';
  const drone0 =
    'public/images/construction_inspection/building_inspection/monitoring_of_works/drone0.mp4';

  const dir =
    './public/images/construction_inspection/building_inspection/monitoring_of_works';

  const listOfVideos: Array<string> = [];
  const files = await fsPromises.readdir(dir);

  files.forEach((fileName) => {
    listOfVideos.push(fileName);
  });

  return {
    props: { listOfVideos },
  };
}
