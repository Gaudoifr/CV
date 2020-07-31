import React from 'react';

import {Icon} from 'semantic-ui-react';

import './footer.scss';


const Footer = () => (
  <div className="footer">
    <p>2020 François Gaudoin</p>
    <ul className="list">
      <li><a href="https://www.linkedin.com/in/francois-gaudoin/" alt="linkedin-link"><Icon className="linkedin-icon" name="linkedin" /></a></li>
      <li><a href="https://github.com/Gaudoifr?tab=repositories" alt="github-link"><Icon className="linkedin-icon" name="github" /></a></li>
    </ul>
  </div>
);

export default Footer;
