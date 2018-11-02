import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from '../home/Home';
import PageNotFound from '../pageNotFound/PageNotFound';
import * as Me from '../../assets/me.jpg';

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <div className="app-body">
          <img id="me" src={Me} />
          <div className="app-body__container">
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
