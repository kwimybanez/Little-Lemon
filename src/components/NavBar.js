import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  // Active NavLink style function
  const activeNav = ({ isActive }) =>
    isActive
      ? 'pr-1 text-md text-black font-bold hover:text-neutral-800'
      : 'pr-1 text-md text-neutral-800 font-bold hover:text-neutral-600';

  // Mobile NavLink style function
  const mobileActive = ({ isActive }) =>
    isActive
      ? 'block p-4 text-md font-semibold text-black pr-24 hover:bg-neutral-200 hover:text-neutral-700 rounded-xl'
      : 'block p-4 text-md font-semibold text-black pr-24 hover:bg-neutral-200 rounded-xl';

  // Function to render hamburger menu icon
  const menuButton = ({ isActive }) =>
    isActive ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />;

  // State for managing mobile menu visibility and backdrop
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu and backdrop
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='mx-auto max-w-7xl px-2 sm:px-2 lg:px-8'>
      <div className='relative px-10 py-4 flex justify-between items-center'>
        <NavLink to='/'>
          <img className='w-60' src={Logo} alt='Little Lemon Logo' />
        </NavLink>

        {/* Navigation Menu Icon */}
        <div className='lg:hidden z-40 rounded-xl cursor-pointer transition-duration-300'>
          <button
            onClick={toggleMenu}
            className='navbar-burger flex items-center text-neutral-600 hover:text-black p-3'>
            {menuButton({ isActive: isMobileMenuOpen })}
          </button>
        </div>

        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div
            className='lg:hidden z-30 navbar-backdrop fixed inset-0 bg-neutral-800 opacity-25'
            onClick={toggleMenu}></div>
        )}

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <ul className='lg:hidden fixed top-0 right-0 bottom-0 flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-50 border-r overflow-auto z-30'>
            <li className='mb-6'>
              <NavLink to='/' className={mobileActive}>
                Home
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/about' className={mobileActive}>
                About
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/menu' className={mobileActive}>
                Menu
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/order' className={mobileActive}>
                Order Online
              </NavLink>
            </li>

            {/* Mobile Booking CTA */}

            <li className='mt-20'>
              <NavLink
                to='/booking'
                className='flex items-center justify-center p-3 text-md font-semibold bg-lemon text-black  hover:bg-yellow-300 hover:text-neutral-600 rounded-xl'>
                Book a Table
              </NavLink>
            </li>
          </ul>
        )}

        {/* Desktop Nav */}
        <ul className='hidden lg:flex lg:items-center lg:w-auto lg:space-x-6 lg:ml-auto'>
          <li>
            <NavLink to='/' className={activeNav}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={activeNav}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu' className={activeNav}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order' className={activeNav}>
              Order Online
            </NavLink>
          </li>

          {/* Desktop Booking CTA */}
          <li>
            <NavLink
              to='/booking'
              className='py-2 px-6 bg-lemon hover:bg-yellow-300 text-md text-black hover:text-neutral-600 font-bold rounded-xl transition duration-300'>
              Book a Table
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
