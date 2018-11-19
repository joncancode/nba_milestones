import React, { Component } from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';

class Scores extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl: '',
      games: [],
      isLoaded: false
    };
  }
  componentWillMount() {
    this.getDate();
  }

  getDate = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = `${year}${month}${day}`;
    this.setState(
      {
        date,
        apiUrl: `http://data.nba.com/data/15m/prod/v1/${date}/scoreboard.json`
      },
      () => {
        axios
          .get(`https://cors-anywhere.herokuapp.com/${this.state.apiUrl}`)
          .then(res => {
            const games = 
            res.data.games.map(function(item, i){
                const games = res.data.games[i].hTeam.triCode;
                return <li key={i}>games {games}</li>
              })
            this.setState({ games });
        }).then(
            this.setState({ isLoaded: true })
        )
        .catch(error => this.setState({ error, isLoaded: false }));
    }
    );
  };

  render() {

    return (
      <div>
        <h2>Current Scores</h2>
        <Scoreboard games={this.state.games}/>
      </div>
    );
  }
}

export default Scores;
