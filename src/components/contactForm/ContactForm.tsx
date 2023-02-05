import React, { forwardRef } from 'react';

import {
  ChatText,
  EnvelopeSimple,
  PaperPlane,
  Phone,
  User,
} from 'phosphor-react';

const ContactForm = forwardRef<HTMLFormElement, {}>(({}, scrollToRef) => {
  return (
    <section className='bg-dp_blue-400 py-2 md:py-5'>
      <h3 className='mb-1 text-center font-bold text-dp_light-100'>
        Entre em contato
      </h3>

      <form
        ref={scrollToRef}
        action=''
        method='post'
        className='px-16 focus-within:text-dp_light-100'
      >
        <label
          htmlFor='name'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <User size={14} weight='bold' className='text-dp_blue-400' />
          <input
            type='text'
            id='name'
            placeholder='Seu nome'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs'
          />
        </label>

        <label
          htmlFor='lastName'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <User size={14} weight='bold' className='text-dp_blue-400' />
          <input
            type='text'
            id='lastName'
            placeholder='Seu sobrenome'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 text-xs text-dp_light-100 placeholder:text-xs'
          />
        </label>

        <label
          htmlFor='phoneNumber'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <Phone size={14} weight='bold' className='text-dp_blue-400' />
          <input
            type='number'
            id='phoneNumber'
            placeholder='Seu telefone'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 placeholder:text-xs'
          />
        </label>

        <label
          htmlFor='lastName'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <EnvelopeSimple
            size={14}
            weight='bold'
            className='text-dp_blue-400'
          />
          <input
            type='email'
            placeholder='Seu e-mail'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 placeholder:text-xs'
          />
        </label>

        <label
          htmlFor='subject'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <ChatText size={14} weight='bold' className='text-dp_blue-400' />
          <input
            type='text'
            id='subject'
            placeholder='Qual é o assunto?'
            className='h-8 w-full rounded-sm bg-dp_blue-800 pl-1 placeholder:text-xs'
          />
        </label>

        <label
          htmlFor='message'
          className='mb-2 flex items-center gap-1 rounded-l-sm bg-dp_blue-800 pl-1.5'
        >
          <ChatText size={14} weight='bold' className='text-dp_blue-400' />
          <textarea
            id='message'
            placeholder='Digite sua mensagem'
            className='mb-2 w-full rounded-sm bg-dp_blue-800 pl-1 placeholder:translate-y-5 placeholder:text-xs'
          ></textarea>
        </label>

        <button className='flex w-full items-center justify-center gap-2 rounded-sm bg-dp_orange-900 py-1 text-xs font-bold text-dp_light-100'>
          <PaperPlane size={14} weight='bold' className='text-dp_light-100' />
          Enviar mensagem
        </button>
      </form>
    </section>
  );
});

export default ContactForm;
