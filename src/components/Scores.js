import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';

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
    let date;
    if(day < 10){
      date = `${year}${month}0${day}`;
    } 
    if(day > 9){
      date = `${year}${month}${day}`;
    } 

    this.setState(
      {
        date,
        apiUrl: `http://data.nba.com/data/15m/prod/v1/${date}/scoreboard.json`
      },
      () => {
        axios
          .get(`https://cors-anywhere.herokuapp.com/${this.state.apiUrl}`)
          .then(res => {
            const games = res.data.games.map(function(item, i) {
              console.log('games in axios', res.data.games);
              const visTeam = res.data.games[i].vTeam.triCode;
              const homeTeam = res.data.games[i].hTeam.triCode;
              const vScore = res.data.games[i].vTeam.score;
              const hScore = res.data.games[i].hTeam.score;
              let gameTime;
              if (res.data.games[i].isGameActivated === true) {
                gameTime = (
                  <p>
                    Q{res.data.games[i].period.current}{' '}
                    {res.data.games[i].clock}
                  </p>
                );
              }
              if (
                res.data.games[i].isGameActivated === false &&
                hScore !== '0'
              ) {
                gameTime = <p style={{ fontWeight: 'bold' }}>FINAL</p>;
              }
              if (res.data.games[i].isGameActivated === false && hScore === '') {
                gameTime = <p>tip-off {res.data.games[i].startTimeEastern}</p>;
              }
              return (
                <Card
                  key={i}
                  className="card"
                  style={{ display: 'inline-block', width: '20%' }}
                >
                  <span style={{ display: 'inline', textAlign: 'center' }}>
                    <h3 key={i}>
                      {visTeam} @ {homeTeam}
                    </h3>
                    <h3 key={i + 1}>
                      {vScore} - {hScore}
                    </h3>
                    {gameTime}
                  </span>
                </Card>
              );
            });
            this.setState({ games });
          })
          .then(this.setState({ isLoaded: true }))
          .catch(error => this.setState({ error, isLoaded: false }));
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Current Scores</h2>
        {this.state.games}
      </div>
    );
  }
}

export default Scores;
