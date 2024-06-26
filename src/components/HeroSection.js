import { NavLink } from 'react-router-dom';
import HeroImage from '../assets/images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <section className='bg-secondary pb-6 max-h-min pt-11'>
      <div className='mx-auto max-w-7xl sm:px-10 md:px-14 flex gap-x-8 justify-between'>
        <div className='flex-col grow items-center flex-start max-w-2xl'>
          <h1 className='min-w-72 font-serif font-semibold text-6xl text-lemon tracking-wide'>
            Little Lemon
          </h1>
          <h2 className='leading-none pb-4 font-serif font-light text-4xl text-neutral-100 tracking-wide'>
            Chicago
          </h2>
          <p className='pb-10 text-neutral-100 text-lg font-light tracking-wider flex grow max-w-md'>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
          <div className='pb-12'>
            <NavLink to='/booking'>
              <button className='drop-shadow-md py-2 px-6 w-full md:w-40 bg-lemon hover:bg-highlighted text-md text-black font-bold rounded-xl transition duration-300 shadow-2xl'>
                Book a Table
              </button>
            </NavLink>
          </div>
        </div>
        <div className='md:pr-6 mt-4 mx-auto md:flex justify-end sm:hidden'>
          <div className='h-64 w-80'>
            <img
              className='rounded-xl hover:scale-105 transition duration-500'
              src={HeroImage}
              alt='Serving delicious dish'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
