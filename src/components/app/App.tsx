import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from '../home/Home';
import PageNotFound from '../pageNotFound/PageNotFound';
import * as Me from '../../assets/me.jpg';
import NavigationMenu from '../navigationMenu/NavigationMenu';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <div className="app-body">
          <img id="me" src={Me} />
          <div className="app-body__container">
            <Switch>
              <NavigationMenu />
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/about" component={Home} />
              <Route exact={true} path="/cv" component={Home} />
              <Route exact={true} path="/blog" component={Home} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
