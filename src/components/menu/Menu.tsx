import Image from 'next/image';

import { Transition } from '@headlessui/react';

import logoHorizontal from 'public/images/logo/logo-white-horizontal.svg';
import { X } from 'phosphor-react';

type PropsMenuVisibility = {
  isShowing: boolean;
  setIsShowing: Function;
};

export default function Menu({ isShowing, setIsShowing }: PropsMenuVisibility) {
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

      <div className='flex w-2/3 flex-col items-center gap-8 bg-dp_blue-800 pt-4 text-dp_light-100 md:gap-12'>
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

        <a>HOME</a>
        <a>INSPEÇÃO DE OBRAS</a>
        <a>CORRETORA</a>
        <a>CONTEÚDO 1</a>
        <a>CONTEÚDO 2</a>
        <a>CONTATO</a>
      </div>
    </Transition>
  );
}
