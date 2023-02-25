import Link from 'next/link';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import modelDubai from '/public/images/real_state_and_brokerage/3d_model_dubai.jpg';
import droneEnvMonitor from '/public/images/real_state_and_brokerage/drone_env_monitor.jpg';
import realStateFacade from '/public/images/real_state_and_brokerage/real_state_facade.jpg';

export default function realStateBrokerage() {
  return (
    <section className='relative h-full min-h-screen bg-dp_light-100'>
      <Header />

      <div className='mx-auto max-w-6xl pb-6 lg:pb-24'>
        <h1 className='my-4 text-center text-4xl font-bold text-dp_blue-800'>
          Inspeção de obras
        </h1>

        <main className='my-4 flex flex-wrap justify-center gap-4 lg:gap-14'>
          <Link href='/'>
            <Card
              name={'Inspeção predial'}
              image={modelDubai}
              description={'Três gruas em uma construção de um prédio.'}
              gradient={'from-gray-900/70'}
            />
          </Link>
          <Link href='/'>
            <Card
              name={'Inspeções de fachadas'}
              image={droneEnvMonitor}
              description={
                'Prédio velho, vermelho, com a fachada descascada de porta com um lago esverdeado.'
              }
              gradient={'from-green-900/50'}
            />
          </Link>
          <Link href='/'>
            <Card
              name={'Acompanhamento de obras'}
              image={realStateFacade}
              description={
                'Seis operários trabalhando na construção de um prédio.'
              }
              gradient={'from-blue-800/50'}
            />
          </Link>
        </main>
      </div>

      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </section>
  );
}
