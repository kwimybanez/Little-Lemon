import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Reservations from './pages/Reservations';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Reservations />
      <Footer />
    </>
  );
}

export default App;
