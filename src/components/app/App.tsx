import * as React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from '../home/Home';
import PageNotFound from '../pageNotFound/PageNotFound';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
