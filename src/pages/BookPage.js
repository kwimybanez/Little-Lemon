import React from 'react';
import TablesAmbient from '../assets/images/Tables Ambient.jpg';
import Form from '../components/Form';

const BookPage = () => {
  return (
    <main className='bg-secondary max-h-min'>
      <section className='mx-auto max-w-7xl sm:pl-10 md:pl-14'>
        {/* Booking Info and Image Divider */}

        <div className='md:grid md:grid-cols-2'>
          <div className='py-10 flex flex-col pr-10'>
            <h1 className='pb-4 w-full font-serif font-medium text-lemon text-5xl'>Book a Table</h1>
            <Form />
          </div>

          <div className='min-h-full w-auto sm:hidden md:block overflow-hidden'>
            <img className='object-contain' src={TablesAmbient} alt='Tables Ambient' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookPage;
