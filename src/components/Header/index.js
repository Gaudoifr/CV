import React from 'react';
import Typewriter from 'typewriter-effect';
import { Icon } from 'semantic-ui-react';
import { reveal as Menu } from 'react-burger-menu';

import './header.scss';

const Header = () => (
  <div id="header">
    {window.screen.width < 767 && (
      <div className="burger">
        <Menu isOpen={false}>
          <a id="header-burger" className="menu-item" href="/#header">Accueil</a>
          <a id="Competences-burger" className="menu-item" href="/#Competences">Compétences et formation</a>
          <a id="Experience-burger" className="menu-item" href="/#Experience">Expériences professionnelles</a>
          <a id="Realisation-burger" className="menu-item" href="/#Realisations">Réalisations</a>
          <a id="Compléments-burger" className="menu-item" href="/#Complement">Compléments</a>
          <a id="Contact-burger" className="menu-item" href="/#Contact">Contact</a>
        </Menu>
      </div>
    )}
    <h1 className="header-maintitle">Bonjour! Je m'appelle</h1>
    <h2 className="header-name">François Gaudoin</h2>
    <h3 className="header-typewriter">Je suis
      <Typewriter
        className="typewriter"
        options={{
          strings: ['Développeur Web Front-End', 'Spécialisé React'],
          autoStart: true,
          loop: true,
          skipAddStyles: true,
        }}
      />
    </h3>
    <ul className="header-links">
      <li><a href="https://www.linkedin.com/in/francois-gaudoin/" alt="linkedin-link"><Icon className="linkedin-icon" name="linkedin"/></a></li>
      <li><a href="https://github.com/Gaudoifr?tab=repositories" alt="github-link"><Icon className="linkedin-icon" name="github"/></a></li>
    </ul>
  </div>
);

export default Header;
