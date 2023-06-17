import fsPromises from 'fs/promises';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

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
      <main className='mx-auto max-w-6xl border border-purple-500 pb-6 lg:pb-24'>
        <h1 className='py-4 text-center text-4xl font-semibold text-dp_blue-800'>
          Acompanhamento de obras
        </h1>
        <section className='border border-black'>
          <div
            id='videos'
            className='grid auto-rows-auto grid-cols-1 border border-yellow-500 lg:grid-cols-3 lg:gap-8'
          >
            <div className='mx-auto aspect-video bg-green-300 lg:col-span-2 lg:h-[612px] lg:w-full'>
              {/* <video
                className='mb-2 h-auto w-full rounded-md bg-gray-900'
                poster={drone0}
                preload='auto'
                controls
              >
                <source src={drone0} />
              </video> */}
              <ReactPlayer controls url={drone0} />

            </div>
            <div className='flex h-20 items-center justify-center gap-8 border border-green-500 lg:flex-col'>
              {/* {listOfVideos.map((item, index) => {
                if (item !== 'drone6.mp4' && item !== 'drone0.mp4') {
                  return (
                    <video
                      key={index}
                      className='h-20 w-20 object-cover'
                      poster={dir + item}
                      muted
                      loop
                      controls
                    >
                      <source src={dir + item} type='video/mp4' />;
                    </video>
                  );
                }
              })} */}

              {/* <HorizontalScroll childrenList={[]}/> */}

              {/* <div className='h-14 w-14 bg-yellow-300'></div>
              <div className='h-14 w-14 bg-yellow-500'></div>
              <div className='h-14 w-14 bg-yellow-700'></div>
              <div className='h-14 w-14 bg-yellow-900'></div> */}
            </div>
          </div>

          {/* Parte do texto */}
          <div id='text' className='my-4 border border-pink-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, recusandae sint libero error quo, consequatur odit
            quibusdam debitis quos commodi earum iure unde ut? Laudantium ut non
            quibusdam? Vitae, ut.
          </div>

          {/* Trabalhos recentes */}
          <div
            id='recent-jobs'
            className='grid grid-cols-3 place-items-center gap-y-2 border border-green-500'
          >
            <div className='h-20 w-20 rounded-lg bg-teal-400'></div>
            <div className='h-20 w-20 rounded-lg bg-teal-600'></div>
            <div className='h-20 w-20 rounded-lg bg-teal-600'></div>
            <div className='h-20 w-20 rounded-lg bg-teal-700'></div>
            <div className='h-20 w-20 rounded-lg bg-teal-800'></div>
            <div className='h-20 w-20 rounded-lg bg-teal-900'></div>
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
