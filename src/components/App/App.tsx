import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import CV from '../CV/CV';
import Blog from '../Blog/Blog';
import PageNotFound from '../PageNotFound/PageNotFound';
import About from '../About/About';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App__body">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/blog" component={Blog} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
