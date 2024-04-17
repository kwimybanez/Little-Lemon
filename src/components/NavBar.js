import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo.svg';

import { useState } from 'react';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
      <NavLink to='/'>
        <img className='main-logo' src={logo} alt='Little Lemon Logo' />
      </NavLink>

      <div className='hamburgerMenu'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className='nav-group'>
        <li>
          <NavLink className={'nav-link'} to='/' onClick={handleClick('Home')}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={'nav-link'} to='/about' onClick={handleClick('About')}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink className={'nav-link'} to='/menu' onClick={handleClick('Menu')}>
            Menu
          </NavLink>
        </li>

        <li>
          <NavLink className={'nav-link'} to='/order' onClick={handleClick('Order')}>
            Order Online
          </NavLink>
        </li>

        <li className={'btn btn-light book-container'}>
          <NavLink to='/booking' onClick={handleClick('BookPage')}>
            Book a Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
