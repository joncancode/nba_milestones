import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/NavBar'
import Search from './components/Search'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <NavBar/>
        <Search/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
