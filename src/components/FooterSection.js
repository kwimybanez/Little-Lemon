import { BsTiktok, BsFacebook, BsYelp, BsInstagram, BsTwitterX } from 'react-icons/bs';
import FooterLogo from '../assets/images/FooterLogo.png';
import { NavLink, Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className='bg-neutral-100'>
      <div className='mx-auto w-full max-w-7xl sm:px-8 md:px-14 p-12 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          {/* Footer Logo */}
          <div className='md:block mb-6 md:mb-0'>
            <NavLink to='/'>
              <img
                src={FooterLogo}
                className='sm:hidden md:block max-h-28 me-3'
                alt='Little Lemon Logo'
              />
            </NavLink>
          </div>
          <div className='grid grid-cols-3 gap-8 sm:gap-5 sm:grid-cols-4'>
            <div>
              <NavLink to='/'>
                <img
                  src={FooterLogo}
                  className='sm:w-16 md:hidden max-h-28 me-3'
                  alt='Little Lemon Logo'
                />
              </NavLink>
            </div>
            {/* Contact Column */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Contact Us
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link to='https://maps.app.goo.gl/Ztiyt7dHTVajvuF98' className='hover:underline'>
                    Address
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link to='mailto:littlelemon@email.com' className='hover:underline'>
                    Email
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:underline'>
                    Phone No
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow us
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link to='https://www.facebook.com' className='hover:underline '>
                    Facebook
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link to='https://www.instagram.com' className='hover:underline'>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to='https://www.twitter.com' className='hover:underline'>
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Legal
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <Link to='#' className='hover:underline'>
                    Booking Policy
                  </Link>
                </li>
                <li>
                  <Link to='#' className='hover:underline'>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyrights & Social Strip */}
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024{' '}
            <NavLink to='/' className='hover:underline'>
              Little Lemon Restaurant
            </NavLink>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <Link
              to='https://www.facebook.com'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
              <BsFacebook />
              <span className='sr-only'>Facebook</span>
            </Link>
            <Link
              to='https://www.instagram.com'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
              <BsInstagram />
              <span className='sr-only'>Instagram</span>
            </Link>
            <Link
              to='https://www.twitter.com'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
              <BsTwitterX />
              <span className='sr-only'>TwitterX</span>
            </Link>
            <Link
              to='https://www.tiktok.com'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
              <BsTiktok />
              <span className='sr-only'>TikTok</span>
            </Link>
            <Link
              to='https://www.yelp.com'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
              <BsYelp />
              <span className='sr-only'>Yelp</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
