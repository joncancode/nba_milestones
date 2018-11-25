import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Scores from './components/Scores';
import DataAssists from './components/DataAssists';
import DataPoints from './components/DataPoints';
import DataRebounds from './components/DataRebounds';
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
              <Route exact path="/assists" component={DataAssists} />
              <Route exact path="/points" component={DataPoints} />
              <Route exact path="/rebounds" component={DataRebounds} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
