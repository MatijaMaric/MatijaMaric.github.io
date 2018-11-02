import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="Navigation">
        <ul>
          <NavLink exact={true} to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
      </div>
    );
  }
}

export default Navigation;
