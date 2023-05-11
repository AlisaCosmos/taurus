import { useState, useEffect, createContext } from 'react';
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

import AboutProjectPage from "./pages/AboutProjectPage/AboutProjectPage";
import Cart from "./pages/Cart/Cart";
import Card from "./pages/Card/Card";
import Delivery from './pages/Delivery/Delivery';
import Contacts from "./pages/Contacts/Contacts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";



import './App.scss';

const SearchContext = createContext();
console.log(SearchContext);

function App() {
  const [searchValue, setSearchValue] = useState([]);

  return (
    <div className="App">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header searchValue={searchValue}  setSearchValue={setSearchValue} />
        <main className="container">
            <Routes>
              <Route path="/" element={<MainPage searchValue={searchValue}  setSearchValue={setSearchValue} />} />
              <Route path="/about-project" element={<AboutProjectPage />} /> 
              <Route path="/card" element={<Card/>} />  
              <Route path="/cart" element={<Cart/>} />
              <Route path="/delivery" element={<Delivery/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </main>
        <Footer/>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
