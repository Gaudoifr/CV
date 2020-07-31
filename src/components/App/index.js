// == Import npm
import React from 'react';
// == Import

import Header from '../Header';
import SideNav from '../SideNav';
import Presentation from '../Presentation';
import Formation from '../Formation';
import Experience from '../Experience';
import Realisations from '../Realisations';
import Contact from 'src/containers/Contact';
import Footer from '../Footer';
import Complement from '../Complements';

import './app.scss';

// == Composant
const App = () => (
  <div className="allpage">
    {window.screen.width > 767 && (
      <SideNav />
    )}
    <div className="app">
      <Header />
      <Presentation />
      <Formation />
      <Experience />
      <Realisations />
      <Complement />
      <Contact />
      <Footer />
    </div>
  </div>
);

// == Export
export default App;
