import { Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

import AboutProjectPage from "./pages/AboutProjectPage/AboutProjectPage";
import Contacts from "./pages/Contacts/Contacts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";



import './App.scss';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about-project" element={<AboutProjectPage />} />   
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
