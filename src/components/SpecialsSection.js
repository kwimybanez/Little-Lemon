import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import GreekSalad from '../assets/images/greek salad.jpg';
import LemonCake from '../assets/images/lemon cake.jpg';
import ShrimpScampi from '../assets/images/shrimp scampi.jpg';

const SpecialsSection = () => {
  return (
    <section className='pb-6 max-h-min pt-11'>
      <div className='pb-6 max-h-min pt-11'>
        <div className='mx-auto max-w-7xl sm:px-10 md:px-14'>
          {/* Heading */}
          <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
            <h2 className='mb-6 text-5xl font-serif font-bold text-gray-900 dark:text-white'>
              Savor the Flavors
            </h2>
            <p className='mb-12 font-regular text-gray-500 sm:text-lg dark:text-gray-400'>
              We invite you to embark on a culinary journey that blends Mediterranean traditions
              with contemporary innovation. We present dishes crafted with passion and dedication by
              our family, celebrating the vibrant flavors of the Mediterranean while embracing
              global culinary trends.
            </p>
          </div>
          <div className=' space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
            {/* Card #1 */}

            <div class='mx-auto lg:mx-0 w-full max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Link to='#'>
                <img
                  class='h-3/6 w-full object-cover pb-8 rounded-t-lg'
                  src={LemonCake}
                  alt='Lemon Cake'
                />
              </Link>
              <div class='px-5 pb-5'>
                <Link to='#'>
                  <h5 class='text-xl pb-2 font-semibold text-gray-900 dark:text-white'>
                    Lemon Cake
                  </h5>
                  <p className='text-sm'>
                    Moist and tender layers of lemon-flavored sponge cake, topped with lemon
                    frosting made from locally sourced organic lemons. A classic delight that's both
                    refreshing and satisfying.
                  </p>
                </Link>
                <div class='flex items-center mt-2.5 mb-5'>
                  <div class='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-neutral-300' />
                  </div>
                  <span class='bg-yellow-100 text-neutral-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-neutral-800 ms-3'>
                    4.0 rating
                  </span>
                </div>
                <div class='flex items-center justify-between'>
                  <span class='text-3xl font-bold text-gray-950 dark:text-white'>$12</span>
                  <Link
                    to='#'
                    class='text-black bg-lemon hover:bg-highlighted focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center'>
                    + Add to Order
                  </Link>
                </div>
              </div>
            </div>

            {/* Card #2 */}
            <div class='mx-auto lg:mx-0 w-full max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Link to='#'>
                <img
                  class='h-3/6 w-full object-cover pb-8 rounded-t-lg'
                  src={GreekSalad}
                  alt='Greek Salad'
                />
              </Link>
              <div class='px-5 pb-5'>
                <Link to='#'>
                  <h5 class='text-xl pb-2 font-semibold text-gray-900 dark:text-white'>
                    Greek Salad
                  </h5>
                  <p className='text-sm'>
                    Lettuce, tomatoes, cucumbers, red onions, tangy Kalamata olives, and creamy feta
                    cheese tossed in a zesty Greek vinaigrette, topped with a sprinkle of oregano.
                  </p>
                </Link>
                <div class='flex items-center mt-2.5 mb-5'>
                  <div class='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-neutral-300' />
                  </div>
                  <span class='bg-yellow-100 text-neutral-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-neutral-800 ms-3'>
                    4.0 rating
                  </span>
                </div>
                <div class='flex items-center justify-between'>
                  <span class='text-3xl font-bold text-gray-950 dark:text-white'>$14</span>
                  <Link
                    to='#'
                    class='text-black bg-lemon hover:bg-highlighted focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center'>
                    + Add to Order
                  </Link>
                </div>
              </div>
            </div>

            {/* Card #3 */}
            <div class='mx-auto lg:mx-0 w-full max-w-sm bg-neutral-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <Link to='#'>
                <img
                  class='h-3/6 w-full object-cover pb-8 rounded-t-lg'
                  src={ShrimpScampi}
                  alt='Shrimp Scampi'
                />
              </Link>
              <div class='px-5 pb-5'>
                <Link to='#'>
                  <h5 class='text-xl pb-2 font-semibold text-gray-900 dark:text-white'>
                    Shrimp Scampi
                  </h5>
                  <p className='text-sm'>
                    Our very own signature Shrimp Scampi. Using only fresh locally grown jumbo
                    shrimp sautéed in a rich blend of butter infused with fresh garlic, shallots,
                    and a splash of white wine.
                  </p>
                </Link>
                <div class='flex items-center mt-2.5 mb-5'>
                  <div class='flex items-center space-x-1 rtl:space-x-reverse'>
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                    <FaStar className='text-yellow-300' />
                  </div>
                  <span class='bg-yellow-100 text-neutral-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-neutral-800 ms-3'>
                    5.0 rating
                  </span>
                </div>
                <div class='flex items-center justify-between'>
                  <span class='text-3xl font-bold text-gray-950 dark:text-white'>$22</span>
                  <Link
                    to='#'
                    class='text-black bg-lemon hover:bg-highlighted focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center'>
                    + Add to Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
