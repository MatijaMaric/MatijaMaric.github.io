import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationMenu.css';

class NavigationMenu extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="navigation-container">
        <ul>
          <NavLink to="/" isActive={this.isActive}>
            Me
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
      </div>
    );
  }

  private isActive = (match: any) => match.isExact;
}

export default NavigationMenu;
