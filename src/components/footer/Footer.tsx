type Props = {
  cor?: string;
};

export default function Footer({ cor }: Props) {

  return (
    <footer
      className={`flex w-full justify-center ${cor ?? 'bg-dp_blue-800'} border-t border-dp_blue-400`}
    >
      <img
        src='/images/logo/logo-white-horizontal.svg'
        alt='Uma estrela com uma hélice em cada ponta simulando um drone'
        className='w-14'
      />
    </footer>
  );
}
