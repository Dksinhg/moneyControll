import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/header';
import About from './Components/Pages/About';
import Home from './Components/Pages/home';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Header/footer';
import "./App.css"

function App() {
  return (
    <div className='app'>   
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} > </Route>
        <Route path="/about" element={ <About />} > </Route>
        <Route path="/services" element={ <Services />} > </Route>
        <Route path="/contact" element={ <Contact />} > </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
