import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

/* Components */
import Home from './pages/Home';
import Services from './pages/Services';
import ResidentialServices from './pages/Residential-Services';
import CommercialServices from './pages/Commercial-Services';
import ConstructionServices from './pages/Construction-Services';
import OtherServices from './pages/Other-Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header'
import Footer from './components/Footer'
import QuoteForm from './pages/Quote-Page';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/services/residential' Component={ResidentialServices} />
        <Route path='/services/business' Component={CommercialServices} />
        <Route path='/services/construction' Component={ConstructionServices} />
        <Route path='/services/other-services' Component={OtherServices} />
        <Route path='/services/get-quote' Component={QuoteForm} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
