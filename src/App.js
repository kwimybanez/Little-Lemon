import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import BookPage from './pages/BookPage.js';
import MenuPage from './pages/MenuPage.js';
import OrderPage from './pages/OrderPage.js';
import FooterSection from './components/FooterSection.js';

import NavBar from './components/NavBar.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/booking' element={<BookPage />} />
          <Route path='/order' element={<OrderPage />} />
        </Routes>

        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
