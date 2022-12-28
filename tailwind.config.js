/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      backgroundImage: {
        hero: 'url(../../public/images/home/hero.jpg)',
        civil_construction: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(40,40,40, 0.8) 85%), url(../../public/images/home/civil_construction.jpg)',
        real_state_market:'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(40,40,40, 0.8) 85%), url(../../public/images/home/real_state_market.jpg)',
        content_1: 'url(../../public/images/home/content_1.jpg)',
        content_2: 'url(../../public/images/home/content_2.jpg)',
        virtual_tour: 'linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(../../public/images/home/virtual_tour.jpg)',
      },
      colors: {
        dp_green: {
          800: '#203A43',
          400: '#53808F',
        },
        dp_orange: {
          900: '#EC4F0B',
        },
        dp_light: {
          100: '#FFFDFA',
          200: '#F2F7F8',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
