import {
  ChatText,
  EnvelopeSimple,
  InstagramLogo,
  Link,
  PaperPlane,
  Phone,
  User,
  WhatsappLogo,
} from 'phosphor-react';
import { forwardRef } from 'react';

const ContactForm = forwardRef<HTMLFormElement, {}>(({}, scrollToRef) => {
  return (
    <section id='form' className='bg-dp_blue-400 py-2 md:py-5 lg:mx-auto lg:my-6 lg:h-[432px] lg:w-[700px] lg:rounded-md'>
      <section className='hidden break-words text-dp_light-100 lg:absolute lg:-ml-10 lg:flex lg:h-96 lg:w-52 lg:flex-col lg:gap-5 lg:rounded-lg lg:border lg:border-dp_orange-900 lg:bg-dp_blue-800 lg:p-2'>
        <div>
          <h6 className='text-lg font-semibold'>
            <Phone weight='fill' className='mr-2 inline' />
            Telefone
          </h6>
          <p className='ml-6 text-base'>(XX) XXXXX-XXXX</p>
        </div>

        <div>
          <h6 className='text-lg font-semibold'>
            <EnvelopeSimple weight='fill' className='mr-2 inline' />
            E-mail
          </h6>
          <p className='ml-6 text-base'>dronepictures@email.com</p>
        </div>

        <div>
          <h6 className='text-lg font-semibold'>
            <Link weight='bold' className='mr-1 inline' /> Redes sociais
          </h6>
          <span className='ml-6'>
            <WhatsappLogo size={22} className='inline' />
            <InstagramLogo size={22} className='inline' />
          </span>
        </div>

        <img
          src='/images/contact_drone_vector.svg'
          alt='Imagem vetorizada de um drone sobrevoando uma cidade'
          className='mt-auto mb-1 w-24 self-center'
        />
      </section>

      <form
        ref={scrollToRef}
        action=''
        method='post'
        className='px-16 focus-within:text-dp_light-100 lg:ml-40 lg:flex lg:h-full lg:flex-col lg:justify-center'
      >
        <h3 className='mb-1 text-center font-bold text-dp_light-100 lg:mb-3 lg:text-left lg:text-xl'>
          Entre em contato
        </h3>

        <div className='lg:flex lg:gap-2'>
          <label
            htmlFor='name'
            className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5 lg:w-1/2'
          >
            <User size={20} weight='bold' className='text-dp_blue-400' />
            <input
              type='text'
              id='name'
              placeholder='Seu nome'
              className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs lg:h-10 lg:w-full lg:pr-1 lg:text-sm lg:placeholder:text-sm'
            />
          </label>

          <label
            htmlFor='lastName'
            className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5 lg:w-1/2'
          >
            <User size={20} weight='bold' className='text-dp_blue-400' />
            <input
              type='text'
              id='lastName'
              placeholder='Seu sobrenome'
              className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs lg:h-10 lg:w-full lg:pr-1 lg:text-sm lg:placeholder:text-sm'
            />
          </label>
        </div>

        <div className='lg:flex lg:gap-2'>
          <label
            htmlFor='phoneNumber'
            className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5 lg:w-1/2'
          >
            <Phone size={20} weight='bold' className='text-dp_blue-400' />
            <input
              type='tel'
              id='phoneNumber'
              placeholder='(99) 99999-9999'
              pattern='(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})'
              className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs lg:h-10 lg:w-full lg:pr-1 lg:text-sm lg:placeholder:text-sm'
            />
          </label>

          <label
            htmlFor='lastName'
            className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5 lg:w-1/2'
          >
            <EnvelopeSimple
              size={20}
              weight='bold'
              className='text-dp_blue-400'
            />
            <input
              type='email'
              placeholder='Seu e-mail'
              className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs lg:h-10 lg:w-full lg:pr-1 lg:text-sm lg:placeholder:text-sm'
            />
          </label>
        </div>

        <label
          htmlFor='subject'
          className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5'
        >
          <ChatText size={20} weight='bold' className='text-dp_blue-400' />
          <input
            type='text'
            id='subject'
            placeholder='Qual é o assunto?'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs lg:h-10 lg:w-full lg:pr-1 lg:text-sm lg:placeholder:text-sm'
          />
        </label>

        <label
          htmlFor='message'
          className='mb-2 flex items-center gap-1 rounded-sm bg-dp_blue-800 pl-1.5'
        >
          <ChatText size={20} weight='bold' className='text-dp_blue-400' />
          <textarea
            id='message'
            placeholder='Digite sua mensagem'
            rows={3}
            className='w-full rounded-sm bg-dp_blue-800 pl-1 text-dp_light-100 placeholder:py-7 placeholder:text-xs lg:placeholder:py-6 lg:placeholder:text-sm'
          ></textarea>
        </label>

        <button className='flex h-9 w-full items-center justify-center gap-2 rounded-sm bg-dp_orange-900 py-1 text-xs font-bold text-dp_light-100'>
          <PaperPlane size={20} weight='bold' className='text-dp_light-100' />
          Enviar mensagem
        </button>
      </form>
    </section>
  );
});

export default ContactForm;
