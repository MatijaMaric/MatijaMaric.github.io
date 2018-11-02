import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

import classNames from 'classnames';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';

interface NavigationProps {}

interface NavigationState {
  extended: boolean;
}

class Navigation extends React.Component<NavigationProps, NavigationState> {
  public constructor(props: NavigationProps) {
    super(props);
    this.state = {
      extended: false
    };
  }

  public render(): React.ReactNode {
    return (
      <div className="Navigation">
        <Hamburger className="Hamburger" onClick={this.toggleExtended} />
        <ul className={classNames('Menu', { extended: this.state.extended })}>
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

  private toggleExtended = () => {
    this.setState({
      extended: !this.state.extended
    });
  };
}

export default Navigation;
