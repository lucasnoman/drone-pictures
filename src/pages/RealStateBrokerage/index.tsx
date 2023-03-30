import Link from 'next/link';
import { InspectionCard } from '../../components/Cards/InspectionCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
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
            <InspectionCard
              name={'Modelagem 3D'}
              image={modelDubai}
              description={'Maquete de um bairro cheio de prédios.'}
              gradient={'from-gray-900/70'}
            />
          </Link>
          <Link href='/'>
            <InspectionCard
              name={'Monitoramento ambiental'}
              image={droneEnvMonitor}
              description={'Um pequeno drone voando entre árvores.'}
              gradient={'from-green-900/50'}
            />
          </Link>
          <Link href='/'>
            <InspectionCard
              name={'Imagens para imobiliárias e corretores de imóveis'}
              image={realStateFacade}
              description={
                'Fachada de um prédio azul e outro laranja, ambos com sacadas.'
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
