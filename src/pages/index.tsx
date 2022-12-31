import { useState } from 'react';

import { Transition } from '@headlessui/react';
import { EnvelopeSimple, List, X } from 'phosphor-react';

import fsPromises from 'fs/promises';
import Image from 'next/image';

import logo from 'public/images/logo/logo.svg';

import Clients from '../components/clients/Clients';
import ContactForm from '../components/contactForm/ContactForm';
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

type ListOfImages = {
  listOfImages: Array<string>;
};

export default function Home({ listOfImages }: ListOfImages) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <main>
      <Menu isShowing={isShowing} setIsShowing={setIsShowing} />

      <section className='flex h-screen flex-col justify-between bg-hero bg-[length:auto_130%] bg-bottom bg-no-repeat px-9 pb-20'>
        <header>
          <Image
            className='mx-auto pt-5'
            src={logo}
            alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
          />
          <List
            className='absolute top-5 right-9 text-dp_blue-800'
            size={32}
            onClick={() => setIsShowing(!isShowing)}
          />
        </header>

        <div className='flex flex-col items-center gap-10 pb-10'>
          <div>
            <h2 className='pb-3 text-center text-3xl font-bold'>Title here</h2>
            <p className='text-center text-lg leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              ligula et lacus luctus semper blandit mollis lectus.
            </p>
          </div>

          <button className='flex w-36 items-center gap-2 rounded bg-dp_blue-800 px-4 py-2 text-xl text-dp_light-100'>
            <EnvelopeSimple size={24} /> Contact
          </button>
        </div>
      </section>

      <section className='flex h-44 items-center justify-evenly'>
        <div className='flex h-full w-full items-end justify-center bg-civil_construction bg-cover bg-center pb-2'>
          <p className='text-dp_light-100'>Construção civil</p>
        </div>
        <div className='flex h-full w-full items-end justify-center bg-real_state_market bg-cover bg-center pb-2'>
          <p className='text-dp_light-100'>Mercado imobiliário</p>
        </div>
      </section>

      <section className='flex h-44 items-center justify-center'>
        <div className='flex h-full w-full flex-col items-center justify-between bg-content_1 bg-cover bg-center leading-5'>
          <h3 className='text-xl font-semibold text-dp_light-100'>Content 1</h3>
          <p className='bg-slate-900/75 text-center text-dp_light-100'>
            Lorem ipsum dolor, sit amet consectetur.
          </p>
        </div>
        <div className='flex h-full w-full flex-col items-center justify-between bg-content_2 bg-cover bg-center leading-5'>
          <h3 className='text-xl font-semibold text-dp_light-100'>Content 2</h3>
          <p className='bg-slate-900/75 text-center text-dp_light-100'>
            Lorem ipsum dolor, sit amet consectetur.
          </p>
        </div>
      </section>

      <section className='flex h-28 w-full flex-col items-center justify-center bg-virtual_tour bg-cover bg-center'>
        <h3 className='text-lg font-semibold leading-5 text-dp_light-100'>
          Em breve...
        </h3>
        <h2 className='text-lg font-semibold leading-5 text-dp_light-100'>
          TOUR VIRTUAL
        </h2>
      </section>

      <Clients imagesList={listOfImages} />

      <ContactForm />

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
