import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, List } from 'phosphor-react';
import logoDefaultWhite from 'public/images/logo/logo-default-white.svg';
import logoHorizontalColored from 'public/images/logo/logo-horizontal-colored.svg';
import { useState } from 'react';
import Menu from '../Menu';

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);

  let linkOptions = [
    { name: 'Página inicial', link: '/' },
    { name: 'Imagens da corretora', link: '/' },
    { name: 'Nossos clientes', link: '/' },
    { name: 'Contato', link: '/' },
  ];

  return (
    <main className='border-b border-dp_blue-400'>
      <Menu
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        linkOptions={linkOptions}
      />
      <header className='bg-dp_light-100'>
        <section className='flex items-center justify-between px-9 py-2 lg:hidden'>
          <Link href='/'>
            <ArrowLeft size={32} className='text-dp_blue-800' />
          </Link>

          <Link href='/'>
            <Image
              src={logoHorizontalColored}
              alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
            />
          </Link>

          <List
            className='top-5 right-9 text-dp_blue-800'
            size={32}
            onClick={() => setIsShowing(!isShowing)}
          />
        </section>

        <section className='hidden h-24  bg-dp_blue-800 px-40 text-dp_light-100 lg:block'>
          <Link href='/' className='absolute left-1/2 mt-2 -translate-x-1/2'>
            <Image
              src={logoDefaultWhite}
              alt='Letra X com 4 hélices nas pontas formando um drone com o texto drone picture abaixo'
            />
          </Link>
          <nav className='flex h-full items-center justify-between'>
            {linkOptions.map((item) => {
              return (
                <Link href={item.link} key={item.name} className='text-lg font-bold'>
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </nav>
        </section>
      </header>
    </main>
  );
}
