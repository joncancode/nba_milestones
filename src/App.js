import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Scores from './components/Scores';
import DataAssists from './components/DataAssists';
import DataPoints from './components/DataPoints';
import DataRebounds from './components/DataRebounds';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <NavBar />
            <Switch>
              <Route  component={Scores} />
              <Route  component={DataAssists} />
              <Route  component={DataPoints} />
              <Route  component={DataRebounds} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
