import React, { Component } from 'react';
import points from '../data/DataPoints.json';
import Card from '@material-ui/core/Card';
import axios from 'axios';

const cardStyle = {
  notActive: {},
  isActive: {
    fontWeight: 'bold'
  }
};


const lebronApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/2544_profile.json`;
const dirkApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/1717_profile.json`;
let pointsArr = points;

export class DataPoints extends Component {
  state = {
    points: pointsArr,
    active: [
    {
      "name": "LeBron James",
      "points": 31628,
      "isActive": true
    },
    {
      "name": "Dirk Nowitzki",
      "points": 31187,
      "isActive": true
    }]
  }

  componentWillMount() {
    console.log('state mount', this.state);
    this.findActiveScores()
  }

  findActiveScores(){
    this.findLebron()
    this.findDirk()
  }

  findLebron() {
    this.setState({ 
    }, () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${lebronApiUrl}`)
        .then(res => {
          console.log(
            'lebron total points',
            res.data.league.standard.stats.careerSummary.points
          );
          this.setState({lebronPoints: res.data.league.standard.stats.careerSummary.points})
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    });
  }

  findDirk() {
    this.setState({}, () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${dirkApiUrl}`)
        .then(res => {
          this.setState({
            dirkPoints: res.data.league.standard.stats.careerSummary.points
          });
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    });
  }

  points = this.state.points.map(function(item, i) {
    if (item.isActive === false) {
      return (
        <Card className="notActive" style={cardStyle.notActive} key={i}>
          {item.name}: {item.points}
        </Card>
      );
    }
    if (item.isActive === true) {
      if (item.name === 'LeBron James') {
        console.log('hello lebron');
      }

      return (
        <Card className="isActive" style={cardStyle.isActive} key={i}>
          {this.state.active.name}: {this.state.lebronPoints}
        </Card>
      );
    }
  });

  render() {
    console.log('state', this.state);
    // const points = this.state.points.map(function(item, i) {
    //   if (item.isActive === false){
    //   return <Card className='notActive' style={cardStyle.notActive} key={i}>{item.name}: {item.points}</Card>;
    //   }
    //   if (item.isActive === true){
    //     return <Card className='isActive' style={cardStyle.isActive} key={i}>{item.name}: {item.points}</Card>;
    //     }
    // });

    return (
      <div>
        {this.points}
        <p>Lebron's total: {this.state.lebronPoints}</p>
        <p>Dirk's total: {this.state.dirkPoints}</p>
      </div>
    );
  }
}

export default DataPoints;
