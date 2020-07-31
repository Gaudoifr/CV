import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import portrait from './portrait.png';

import './presentation.scss';

const Presentation = () => (
  <div className="presentation">
    <h1 className="title-present">Permettez-moi de me présenter.</h1>
    <div className="presentation-content">
      {window.screen.width > 767 && (
      <Grid columns={2}>
        <Grid.Column className="content">
          <div className="text-presentation">
            <p>Baignant depuis mes 18 ans dans le web et l’informatique en général,
              j’ai décidé de me reconvertir pour vivre de ma passion.
            </p>
            <p>
              Après 5 mois de formation intensive chez <a alt="lien vers site O'clock" href="https://www.oclock.io">O’clock</a>, je m’en suis enfin
              donné les moyens.
            </p>
            <p>
              Doté d’une solide culture d’entreprise, j’aime par-dessus tout
              le travail d’équipe, apprendre et partager.
            </p>
            <Segment className="description">
              <p> François Gaudoin</p>
              <p>38 ans</p>
              <p>126 boulevard Maurice Berteaux 78420 Carrières sur Seine</p>
              <p>francois.gaudoin@gmail.com</p>
            </Segment>
          </div>
        </Grid.Column>
        <Grid.Column className="portrait">
          <img className="portrait-img" alt="francois gaudoin portrait" src={portrait} />
        </Grid.Column>
      </Grid>
      )}
      {window.screen.width < 767 && (
        <div className="text-presentation">
          <div className="portrait">
            <img className="portrait-img" alt="francois gaudoin portrait" src={portrait} />
          </div>
          <div className="content">
            <p>Baignant depuis mes 18 ans dans le web et l’informatique en général,
              j’ai décidé de me reconvertir pour vivre de ma passion.
            </p>
            <p>
              Après 5 mois de formation intensive chez <a alt="lien vers site O'clock" href="https://www.oclock.io">O’clock</a>, je m’en suis enfin
              donné les moyens.
            </p>
            <p>
              Doté d’une solide culture d’entreprise, j’aime par-dessus tout
              le travail d’équipe, apprendre et partager.
            </p>
            <Segment className="description">
              <p> François Gaudoin</p>
              <p>38 ans</p>
              <p>126 boulevard Maurice Berteaux 78420 Carrières sur Seine</p>
              <p>francois.gaudoin@gmail.com</p>
            </Segment>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Presentation;
