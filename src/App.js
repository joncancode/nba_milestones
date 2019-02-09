import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Scores from './components/Scores';
import DataPoints from './components/DataPoints';
import TeamTracker from './components/TeamTracker';
import NotFound from './components/NotFound';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Scores} />
              <Route exact path="/scoreboard" component={Scores} />
              <Route exact path="/lebron" component={DataPoints} />
              <Route exact path="/teams" component={TeamTracker} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
