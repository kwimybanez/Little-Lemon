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

  // Function to close mobile menu when NavLink is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className='mx-auto max-w-7xl sm:px-3 md:px-6 lg:px-8'>
      <div className='relative px-6 py-4 flex justify-between items-center'>
        <NavLink to='/' onClick={closeMobileMenu}>
          <img className='w-60' src={Logo} alt='Little Lemon Logo' />
        </NavLink>

        {/* Navigation Menu Icon */}
        <div className='lg:hidden z-40 rounded-xl cursor-pointer transition-duration-600'>
          <button
            onClick={toggleMenu}
            className='navbar-burger flex items-center hover:bg-neutral-100 rounded-xl text-neutral-600 hover:text-black p-3'>
            {menuButton({ isActive: isMobileMenuOpen })}
          </button>
        </div>

        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div
            className='lg:hidden z-30 navbar-backdrop fixed inset-0 bg-neutral-800 opacity-35'
            onClick={toggleMenu}></div>
        )}

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <ul className='lg:hidden fixed top-0 right-0 bottom-0 flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-50 border-r overflow-auto z-30'>
            <li className='mb-6'>
              <NavLink to='/' className={mobileActive} onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/about' className={mobileActive} onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/menu' className={mobileActive} onClick={closeMobileMenu}>
                Menu
              </NavLink>
            </li>
            <li className='mb-6'>
              <NavLink to='/order' className={mobileActive} onClick={closeMobileMenu}>
                Order Online
              </NavLink>
            </li>

            {/* Mobile Booking CTA */}

            <li className='mt-12'>
              <NavLink
                to='/booking'
                className='flex items-center justify-center p-3 text-md font-semibold bg-lemon text-black hover:bg-highlighted  rounded-xl'
                onClick={closeMobileMenu}>
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
              className='drop-shadow-md py-3 px-6 bg-lemon hover:bg-highlighted text-md text-black  font-bold rounded-xl transition duration-300'>
              Book a Table
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
