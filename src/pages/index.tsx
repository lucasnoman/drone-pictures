import fsPromises from 'fs/promises';
import Image from 'next/image';
import { EnvelopeSimple, List } from 'phosphor-react';
import logo from 'public/images/logo/logo.svg';
import { useRef, useState } from 'react';
import { IndexCard } from '../components/Cards/IndexCard';
import ContactForm from '../components/ContactForm';
import { ContentsSummary } from '../components/ContentsSummary';
import Footer from '../components/Footer';
import HorizontalScroll from '../components/HorizontalScroll';
import Menu from '../components/Menu';

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

      {/* NOTE - Componentizar esse Hero. Tenho que mandar o useRef para o componente */}
      <section className='flex h-screen flex-col justify-between bg-hero bg-[length:auto_130%] bg-bottom bg-no-repeat px-9 pb-20 lg:h-[70vh] lg:bg-cover lg:bg-center'>
        <header>
          <Image
            className='mx-auto pt-5'
            src={logo}
            alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
            loading='eager'
          />
          <List
            className='absolute right-9 top-5 text-dp_blue-800'
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
        <IndexCard
          bgImage='bg-real_state_market'
          borderColor='outline-dp_light-200'
          link='/ConstructionInspection'
          title='Inspeção de obras'
        />
        <IndexCard
          bgImage='bg-civil_construction'
          borderColor='outline-dp_orange-900'
          link='/RealStateBrokerage'
          title='Imóveis e corretagem'
        />
      </section>

      <ContentsSummary />

      <section className='flex h-28 w-full flex-col items-center justify-center bg-virtual_tour bg-cover bg-center lg:h-96'>
        <h3 className='text-lg font-semibold leading-5 text-dp_light-100 lg:text-4xl'>
          Em breve...
        </h3>
        <h2 className='text-lg font-semibold leading-5 text-dp_light-100 lg:text-4xl'>
          TOUR VIRTUAL
        </h2>
      </section>

      <HorizontalScroll childrenList={listOfImages} />

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
