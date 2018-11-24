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
              <Route exact path="/" component={Scores} />
              <Route exact path="/assists" component={DataAssists} />
              <Route exact path="/points" component={DataPoints} />
              <Route exact path="/rebounds" component={DataRebounds} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
