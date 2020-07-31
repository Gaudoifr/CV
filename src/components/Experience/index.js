import React from 'react';

import { Card, Image } from 'semantic-ui-react';

import dns from './dns.png';
import cic from './cic.png';
import bnp from './BNP.png';

import './experience.scss';

const Experience = () => (
  <div id="Experience">
    <h1>Expérience professionnelle</h1>
    <div className="xp-cards">
      <Card.Group>
        <Card className="exp" raised>
          <Card.Content>
            <Image
              className="dns-pic"
              wrapped
              size='medium'
              src={dns}
            />
            <Card.Header>Président de ma société</Card.Header>
            <Card.Meta>DocnShare</Card.Meta>
            <p>2018 - 2020</p>
            <p>- Application destinée aux professionnels</p>
            <p>(dématérialisation de leurs documents, gestion comptable, mise en relation).</p>
            <p> - Création de la société, gestion commerciale et administrative, partenariats.</p>
          </Card.Content>
        </Card>
        <Card className="exp">
          <Card.Content>
            <Image
              className="cic-pic"
              floated="right"
              size='medium'
              src={cic}
            />
            <Card.Header>Conseiller Patrimonial</Card.Header>
            <Card.Meta>CIC</Card.Meta>
            <p>2016 - 2018</p>
            <p>Agence de Paris Grande Armée</p>
            <p>Portefeuille de clients très haut de gamme. Référent épargne financière, vente de biens immobiliers.</p>
          </Card.Content>
        </Card>
        <Card className="exp">
          <Card.Content>
            <Image
              className="bnp-pic"
              floated="right"
              size='medium'
              src={bnp}
            />
            <Card.Header>Conseiller Patrimonial, chargé de compte OPC</Card.Header>
            <Card.Meta>BNP Paribas, BPSS</Card.Meta>
            <p>2009 - 2016</p>
            <p>Conseil auprès de client haut de gamme en agence</p>
            <p>Aide technique à la création, aux OST, au passage d’ordre et à l’étude des performances des fonds en collaboration avec les gérants de fonds.</p>
          </Card.Content>
        </Card>

      </Card.Group>
    </div>
  </div>
);

export default Experience;
