import React from 'react';

import { Progress, Segment } from 'semantic-ui-react';

import './complement.scss';

const Complement = () => (
  <div id="Complement">
    <h1>Langues</h1>
    <Segment className="segment">
      <ul>
        <li>Anglais <Progress percent={85} indicating>Professionnel</Progress></li>
        <li>Espagnol<Progress percent={40} indicating>Scolaire</Progress></li>
        <li>Chinois<Progress percent={10} indicating>Notions</Progress></li>
      </ul>
    </Segment>
    <h1>Passions</h1>
    <ul className="passions">
      <li>Création musicale</li>
      <li>Auteur de quatre romans</li>
      <li>Edition et création via Photoshop</li>
    </ul>
  </div>
);

export default Complement;
