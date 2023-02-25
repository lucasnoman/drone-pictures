import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

export default function MonitoringWorks() {
  return (
    <section className='relative h-full min-h-screen bg-dp_light-100'>
      <Header />
      <main className='mx-auto max-w-6xl border border-purple-500 pb-6 lg:pb-24'>
        <h1 className='py-4 text-center text-4xl font-semibold text-dp_blue-800'>
          Acompanhamento de obras
        </h1>
        <section>
          <div id='videos'></div>
          <div id='text'></div>
          <div id='recent-jobs'></div>
        </section>
      </main>
      <footer className='absolute bottom-0 w-full'>
        <Footer />
      </footer>
    </section>
  );
}
