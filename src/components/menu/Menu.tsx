import Image from 'next/image';
import Link from 'next/link';

import { Transition } from '@headlessui/react';
import { X } from 'phosphor-react';

import logoHorizontal from 'public/images/logo/logo-white-horizontal.svg';

type PropsMenuVisibility = {
  isShowing: boolean;
  setIsShowing: Function;
  linkOptions?: string[];
};

export default function Menu({
  isShowing,
  setIsShowing,
  linkOptions,
}: PropsMenuVisibility) {
  return (
    <Transition
      show={isShowing}
      className='fixed top-0 z-10 flex h-full w-full'
      enter='transition ease-in-out duration-300 transform'
      enterFrom='translate-x-full'
      enterTo='translate-x-0'
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='translate-x-0'
      leaveTo='translate-x-full'
    >
      <div className='w-1/3 bg-dp_blue-800/90'></div>

      <nav className='flex w-2/3 flex-col items-center gap-8 bg-dp_blue-800 pt-4 text-dp_light-100 md:gap-12'>
        <X
          size={32}
          className='mr-9 mt-1 self-end'
          onClick={() => setIsShowing(!isShowing)}
        />

        <span>
          <Image
            className='mx-auto w-36'
            src={logoHorizontal}
            alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
          />
          <hr className='w-36 border-dp_orange-900' />
        </span>

        {linkOptions ? (
          linkOptions.map((item, index) => (
            <a href='' key={index}>
              {item}
            </a>
          ))
        ) : (
          <>
            <Link href='/'>HOME</Link>
            <Link href='/'>INSPEÇÃO DE OBRAS</Link>
            <Link href='/'>CORRETORA</Link>
            <Link href='/'>CONTEÚDO 1</Link>
            <Link href='/'>CONTEÚDO 2</Link>
            <Link href='/'>CONTATO</Link>
          </>
        )}
      </nav>
    </Transition>
  );
}
