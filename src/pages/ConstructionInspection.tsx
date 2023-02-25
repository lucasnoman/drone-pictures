import Link from 'next/link';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import crane from '/public/images/construction_inspection/crane.jpg';
import constructionBlueprint from '/public/images/construction_inspection/construction-blueprint.jpg';
import workersOnConstruction from '/public/images/construction_inspection/workers-on-construction.jpg';
import buildingFacade from '/public/images/construction_inspection/building-facade.jpg';

export default function ConstructionInspection() {
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
              image={crane}
              description={'Três gruas em uma construção de um prédio.'}
              gradient={'from-stone-700/80'}
            />
          </Link>
          <Link href='/'>
            <Card
              name={'Inspeções de fachadas'}
              image={buildingFacade}
              description={
                'Prédio velho, vermelho, com a fachada descascada de porta com um lago esverdeado.'
              }
              gradient={'from-teal-800/80'}
            />
          </Link>
          <Link href='/ConstructionInspection/MonitoringWorks'>
            <Card
              name={'Acompanhamento de obras'}
              image={workersOnConstruction}
              description={
                'Seis operários trabalhando na construção de um prédio.'
              }
              gradient={'from-sky-900/70'}
            />
          </Link>
          <Link href='/'>
            <Card
              name={'Inspeções para Laudo Técnico'}
              image={constructionBlueprint}
              description={
                'Um engenheiro mostrando a planta da construção para a cliente.'
              }
              gradient={'from-amber-900/60'}
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
