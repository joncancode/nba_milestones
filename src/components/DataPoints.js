import React, { Component } from 'react';
import points from '../data/DataPoints.json';
import Card from '@material-ui/core/Card';
import axios from 'axios';

const cardStyle = {
  notActive: {
  
  },
  isActive: {
    fontWeight: 'bold'
  }
};

const lebronApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/2544_profile.json`;
const dirkApiUrl = `http://data.nba.net/10s/prod/v1/2018/players/1717_profile.json`
let pointsArr = points

export class DataPoints extends Component {
  state = {
    points: points,
    // lebron: 2544,
    // dirk: 1717
  };

componentWillMount(){
  console.log('state mount', this.state)
  console.log('var pts', points)
}

findActiveScores(){
  this.setState(
    {
      
      
    },
    () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${lebronApiUrl}`)
        .then(res => {
        console.log('lebron total points', res.data.league.standard.stats.careerSummary.points)
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    }
  );
}

findDirk(){
  this.setState(
    {
     
    },
    () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/${dirkApiUrl}`)
        .then(res => {

          this.setState({
            dirkPoints: res.data.league.standard.stats.careerSummary.points
          })
        })
        .catch(error => this.setState({ error, isLoaded: false }));
    }
  );
}


  points = this.state.points.map(function(item, i) {
    if (item.isActive === false){
    return <Card className='notActive' style={cardStyle.notActive} key={i}>{item.name}: {item.points}</Card>;
    } 
    if (item.isActive === true){ 

      if (item.name === 'LeBron James'){
        console.log('hello lebron')
      }

      return <Card className='isActive' style={cardStyle.isActive} key={i}>{item.name}: {item.points}</Card>;
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

    return <div>{this.points}</div>;
  }
}

export default DataPoints;
