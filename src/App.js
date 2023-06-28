import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
import Cart from './pages/Cart/Cart';
import Card from './pages/Card/Card';
import Delivery from './pages/Delivery/Delivery';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import './App.scss';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState([]);
 const a =
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-project" element={<AboutProjectPage />} />
            <Route path="/card" element={<Card />} />
            {/* <Route path="/cart" element={<Cart/>} /> */}
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
