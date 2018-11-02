import React from 'react';

import './About.scss';

import MeJpg from '../../assets/me.jpg';

class About extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="About">
        <div className="About__title">ABOUT</div>
        <div className="About__body">
          <img className="About__body__picture" src={MeJpg} />
          <div className="About__body__description">Henlo humans amirite</div>
        </div>
      </div>
    );
  }
}

export default About;
