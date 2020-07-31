import React from 'react';
import { Card, Image } from 'semantic-ui-react';


import rr from './react.png';
import redux from './redux.png';
import php from './php.png';
import js from './JS.png';
import node from './node.png';
import boot from './boot.png';
import css from './css-html.png';
import git from './git.png';
import oclock from './oclock.png';
import opquast from './badge_avance.svg';
import icp from './icp.jpg';

import './formation.scss';

const Formation = () => (

  <div>
    <div id="Competences">
      <h1>Compétences</h1>
      <div className="comp-list">
        <Card.Group>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={rr}
              />
              <Card.Header>React</Card.Header>
              <Card.Meta>Spécialisation</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={redux}
              />
              <Card.Header>Redux</Card.Header>
              <Card.Meta>Spécialisation</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={js}
              />
              <Card.Header>JavaScript</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={css}
              />
              <Card.Header>HTML / CSS</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={php}
              />
              <Card.Header>PHP 5/7 POO, MVC, AJAX</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={node}
              />
              <Card.Header>NodeJS, Express, Mongoose</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={git}
              />
              <Card.Header>Github</Card.Header>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={boot}
              />
              <Card.Header>Bootstrap / Semantic UI</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
    <div className="formation">
      <h1>Formation</h1>
      <div className="list-formations">
        <Card className="format">
          <Card.Content>
            <Image
              floated='right'
              size='small'
              src={oclock}
            />
            <Card.Header>O'clock</Card.Header>
            <p className="firstline">Développeur Web, spécialisation React.</p>
            <p>700 heures de cours intensifs HTML, CSS, PHP, Lumen, SQL, JavaScript Vanilla.</p>
            <p>Spécialisation React sur un mois.</p>
            <p>Projet de fin de formation : SmartCowork (avant mise en ligne par la suite).</p>
            <ul>
              <li>Développement Front-End en utilisant des composants React d’une application web sur 4 semaines en tant que Lead Front.</li>
              <li>Projet en équipe de 5 personnes (méthode Agile / Scrum: 3 front, 2 back).</li>
              <li>Mise en relation de professionnels afin de les aider à louer des bureaux en coworking. Espace dédié aux professionnels de la location.</li>
            </ul>
          </Card.Content>
        </Card>
        <Card className="format">
          <Card.Content>
            <Image
              floated='right'
              size='small'
              src={opquast}
            />
            <Card.Header>Opquast</Card.Header>
            <p className="firstline">Certification Opquast</p>
            <p>Niveau Avancé (880 / 1000)</p>
          </Card.Content>
        </Card>
        <Card className="format">
          <Card.Content>
            <Image
              floated='right'
              size='small'
              src={icp}
            />
            <Card.Header>Maîtrise d'histoire</Card.Header>
            <p className="firstline">Institut Catholique de Paris</p>
            <p>Niveau Avancé (880 / 1000)</p>
          </Card.Content>
        </Card>
      </div>
    </div>
  </div>
);

export default Formation;
