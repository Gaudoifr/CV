import React from 'react';
import './sidenav.scss';
import { Container } from 'semantic-ui-react';

const SideNav = () => (
  <Container>
    {window.screen.width > 767 && (
    <div className="sideNav">
      <h1 className="title-nav">Navigation rapide</h1>
      <ul className="list-nav">
        <a href="/#header">
          <li className="list-item">Accueil</li>
        </a>
        <a href="/#Competences">
          <li className="list-item">Compétences et formation</li>
        </a>
        <a href="/#Experience">
          <li className="list-item">Expériences professionnelles</li>
        </a>
        <a href="/#Realisations">
          <li className="list-item">Réalisations</li>
        </a>
        <a href="/#Complement">
          <li className="list-item">Compléments</li>
        </a>
        <a href="/#Contact">
          <li className="list-item">Contact</li>
        </a>
      </ul>
    </div>
    )}
  </Container>
);

export default SideNav;
