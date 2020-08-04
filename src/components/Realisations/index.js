import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import Slider from 'react-slick';

import smart from './smart.png';
import ev from './ev.png';

import './realisations.scss';

const Realisations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="Realisations">
      <h1>Réalisations</h1>
      <Slider className="slider" {...settings}>
        <div>
          <Card>
            <Image src={ev} wrapped ui={false} />
            <Card.Content>
              <Card.Header>EasyVape</Card.Header>
              <Card.Description>
                <div className="card-head">
                  <p>Techno: Prestashop</p>
                </div>
                <div className="card-content">
                  <p>Projet freelance, réalisé seul</p>
                  <p className="role">Création et maintenance</p>
                  <p>Vente en ligne univers de la cigarette électronique pour une chaîne de boutiques dans les Yvelines (5 établissements)</p>
                  <p>Eliquides et accessoires haut de gamme</p>
                  <p>Gestion monétique et stocks</p>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div>
          <Card>
            <Image src={smart} wrapped ui={false} />
            <Card.Content>
              <Card.Header>SmartCowork</Card.Header>
              <Card.Description>
                <div className="card-head">
                  <p>Réalisé from scratch</p>
                  <p>Technos: React, Redux, Semantic UI React, WebPack, Babel</p>
                  <p>Back-end: Symfony</p>
                </div>
                <div className="card-content">
                  <p>Projet réalisé en équipe (5 personnes)</p>
                  <p className="role">Lead Front</p>
                  <p>Réseau social de mise en relation de professionnels afin de les aider à louer des bureaux en coworking. Espace dédié aux professionnels de la location.</p>
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </Slider>
      <h2>Plus de travaux ? Allez jeter un oeil sur <a href="https://github.com/Gaudoifr?tab=repositories" alt="github link">mon repo GitHub ! <Icon className="logo" name="github" /></a></h2>
    </div>
  );
};

export default Realisations;
