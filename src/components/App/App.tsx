import React from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router';
import PageNotFound from '../PageNotFound/PageNotFound';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App__body">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
