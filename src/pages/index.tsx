import fsPromises from 'fs/promises';
import Image from 'next/image';
import { CaretLeft, CaretRight, EnvelopeSimple, List } from 'phosphor-react';
import logo from '../../public/images/logo/logo.svg';
import Footer from '../components/footer';

interface Images {
  listOfImages: Array<string>;
}

export default function Home({ listOfImages }: Images) {
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
    <main>
      <section className='flex h-screen flex-col justify-between bg-hero bg-[length:auto_130%] bg-bottom bg-no-repeat px-9 pb-20'>
        <header>
          <Image
            className='mx-auto pt-5'
            src={logo}
            alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
          />
          <List
            className='absolute top-5 right-9 text-dp_green-800'
            size={32}
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

          <button className='flex w-36 items-center gap-2 rounded bg-dp_green-800 px-4 py-2 text-xl text-dp_light-100'>
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
            {listOfImages.map((item, index) => {
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

      <section className='bg-dp_green-400 py-2'>
        <h3 className='mb-1 text-center font-bold text-dp_light-100'>
          Entre em contato
        </h3>

        <form
          action=''
          method='post'
          className='grid grid-cols-2 gap-x-2 px-16'
        >
          <input
            type='text'
            placeholder='Seu nome'
            className='mb-2 h-5 w-auto rounded-sm bg-dp_green-800 pl-2 placeholder:text-xs'
          />
          <input
            type='text'
            placeholder='Seu sobrenome'
            className='mb-2 h-5 w-auto rounded-sm bg-dp_green-800 pl-2 placeholder:text-xs'
          />
          <input
            type='number'
            placeholder='Seu telefone'
            className='col-span-2 mb-2 h-5 rounded-sm bg-dp_green-800 pl-2 placeholder:text-xs'
          />
          <input
            type='email'
            placeholder='Seu e-mail'
            className='col-span-2 mb-2 h-5 rounded-sm bg-dp_green-800 pl-2 placeholder:text-xs'
          />
          <input
            type='text'
            placeholder='Qual é o assunto?'
            className='col-span-2 mb-2 h-5 rounded-sm bg-dp_green-800 pl-2 placeholder:text-xs'
          />
          <textarea
            placeholder='Digite sua mensagem'
            className='col-span-2 mb-2 rounded-sm bg-dp_green-800 pl-2 placeholder:translate-y-3 placeholder:text-xs'
          ></textarea>

          <button className='col-span-2 rounded-sm bg-dp_orange-900 py-1 text-xs font-bold text-dp_light-100'>
            Enviar mensagem
          </button>
        </form>
      </section>

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
