import React, { Component } from 'react';
import axios from 'axios';

const teamApiUrl = `http://data.nba.net/10s/prod/v1/2018/players.json`;

const styles = {
  teamTracker: {
    margin: '0 auto',
    width: '80%'
  }
};

export class TeamTracker extends Component {
  state = {
    data: ''
  };

  componentWillMount() {
    this.setState({}, () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${teamApiUrl}`)
        .then(res => {
          this.setState({
            data: res.data.league.standard,
          });
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    });
  }

  render() {
    console.log('data', this.state);
    return (
      <div style={styles.teamTracker}>
        <h3>Total current NBA players: {this.state.data.length}</h3>
        
      </div>
    );
  }
}

export default TeamTracker;
