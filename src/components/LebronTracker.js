import React, { Component } from 'react';
import axios from 'axios';
import points from '../data/DataPoints.json';

const lebronApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/2544_profile.json`;
const pointsArr = points;

const styles = {
  lebronTracker: {
    margin: '0 auto',
    width: '80%',
  }
};

export class LebronTracker extends Component {
  state = {
    points: pointsArr,
    lebronPoints: 0
  };

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
    console.log('this.state', this.state);

    let diffKareem = this.state.points[0].points - this.state.lebronPoints;
    let diffMalone = this.state.points[1].points - this.state.lebronPoints;
    let diffKobe = this.state.points[2].points - this.state.lebronPoints;
    let diffMJ = this.state.points[3].points - this.state.lebronPoints;

    return (
      <div style={styles.lebronTracker}>
        <h2>Lebron James currently has {this.state.lebronPoints} points</h2>
        <h4>
          He is {diffKareem.toLocaleString('en', { useGrouping: true })} points
          away from {this.state.points[0].name}
        </h4>
        <h4>
          He is {diffMalone.toLocaleString('en', { useGrouping: true })} points
          away from {this.state.points[1].name}
        </h4>
        <h4>
          He is {diffKobe.toLocaleString('en', { useGrouping: true })} points
          away from {this.state.points[2].name}
        </h4>
        <h4>
          He is {diffMJ.toLocaleString('en', { useGrouping: true })} points away
          from {this.state.points[3].name}
        </h4>
      </div>
    );
  }
}

export default LebronTracker;
