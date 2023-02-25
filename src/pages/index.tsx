import fsPromises from 'fs/promises';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { EnvelopeSimple, List } from 'phosphor-react';

import logo from 'public/images/logo/logo.svg';

import Clients from '../components/clients/Clients';
import ContactForm from '../components/contactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

type ListOfImages = {
  listOfImages: string[];
};

export default function Home({ listOfImages }: ListOfImages) {
  const [isShowing, setIsShowing] = useState(false);

  const scrollToRef = useRef<HTMLFormElement>(null);

  function handleScrollToElement() {
    scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <Menu isShowing={isShowing} setIsShowing={setIsShowing} />

      <section className='flex h-screen flex-col justify-between bg-hero bg-[length:auto_130%] bg-bottom bg-no-repeat px-9 pb-20 lg:h-[70vh] lg:bg-cover lg:bg-center'>
        <header>
          <Image
            className='mx-auto pt-5'
            src={logo}
            alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
            loading='eager'
          />
          <List
            className='absolute top-5 right-9 text-dp_blue-800'
            size={32}
            onClick={() => setIsShowing(!isShowing)}
          />
        </header>

        <div className='flex flex-col items-center gap-10 pb-10'>
          <div className='lg:hidden'>
            <h2 className='pb-3 text-center text-3xl font-bold'>Title here</h2>
            <p className='text-center text-lg leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              ligula et lacus luctus semper blandit mollis lectus.
            </p>
          </div>

          <button
            onClick={handleScrollToElement}
            className='min:w-36 flex items-center gap-2 rounded bg-dp_blue-800 px-4 py-2 text-xl text-dp_light-100 duration-100 ease-in lg:border-2 lg:border-dp_blue-800 lg:bg-transparent lg:font-bold lg:text-dp_blue-800 lg:hover:scale-105'
          >
            <EnvelopeSimple size={24} weight='duotone' />
            Entre em contato
          </button>
        </div>
      </section>

      <section className='flex h-44 items-center justify-evenly lg:h-64 lg:justify-center lg:gap-14 lg:bg-dp_blue-800'>
        <div className='h-full w-full lg:relative lg:bottom-12 lg:h-64 lg:w-80 lg:rounded-sm lg:outline lg:outline-1 lg:outline-offset-8 lg:outline-dp_light-200'>
          <Link href='/ConstructionInspection' className='h-full w-full'>
            <div className='flex h-full w-full items-end justify-center bg-real_state_market bg-cover bg-center duration-100 ease-in lg:rounded-md lg:hover:scale-105'>
              <p className='pb-3 text-center text-dp_light-100 lg:font-bold'>
                Inspeção de obras
              </p>
            </div>
          </Link>
        </div>

        <div className='flex h-full w-full items-end justify-center lg:relative lg:bottom-12 lg:h-64 lg:w-80 lg:rounded-sm lg:outline lg:outline-1 lg:outline-offset-8 lg:outline-dp_orange-900'>
          <Link href='/RealStateBrokerage' className='h-full w-full'>
            <div className='flex h-full w-full items-end justify-center bg-civil_construction bg-cover bg-center duration-100 ease-in lg:rounded-md lg:hover:scale-105'>
              <p className='pb-3 text-center text-dp_light-100 lg:font-bold'>
                Imóveis e corretagem
              </p>
            </div>
          </Link>
        </div>
      </section>

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
            veritatis ex saepe perferendis asperiores suscipit impedit
            laudantium nobis voluptatibus laboriosam tempore obcaecati harum
            accusantium libero at, nisi reiciendis placeat quae.
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
            veritatis ex saepe perferendis asperiores suscipit impedit
            laudantium nobis voluptatibus laboriosam tempore obcaecati harum
            accusantium libero at, nisi reiciendis placeat quae.
          </p>
        </div>
      </section>

      <section className='flex h-28 w-full flex-col items-center justify-center bg-virtual_tour bg-cover bg-center lg:h-96'>
        <h3 className='text-lg font-semibold leading-5 text-dp_light-100 lg:text-4xl'>
          Em breve...
        </h3>
        <h2 className='text-lg font-semibold leading-5 text-dp_light-100 lg:text-4xl'>
          TOUR VIRTUAL
        </h2>
      </section>

      <Clients imagesList={listOfImages} />

      <ContactForm ref={scrollToRef} />

      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const dir = './public/images/clients';

  const listOfImages: Array<string> = [];
  const files = await fsPromises.readdir(dir);

  files.forEach((fileName) => {
    listOfImages.push(fileName);
  });

  return {
    props: { listOfImages },
  };
}
