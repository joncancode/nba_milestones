import React, { Component } from 'react'
import axios from 'axios';

const lebronApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/2544_profile.json`;
export class LebronTracker extends Component {

  componentWillMount() {
    this.findLebron();
  }

  findLebron() {
    this.setState({}, () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${lebronApiUrl}`)
        .then(res => {
          console.log(
            'lebron total points',
            res.data.league.standard.stats.careerSummary.points
          );
          this.setState({
            lebronPoints: res.data.league.standard.stats.careerSummary.points
          });
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    });
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <h2>Lebron James currently has {this.state.lebronPoints} points</h2>
      </div>
    )
  }
}

export default LebronTracker;
