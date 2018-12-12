import React, { Component } from 'react';
import points from '../data/DataPoints.json';
import Card from '@material-ui/core/Card';
import LebronTracker from './LebronTracker';

const cardStyle = {
  notActive: {
    margin: '0 auto',
    display: 'inline-block',
    marginBottom: '10px',
    width: '20%',
    textAlign: 'center',
    padding: '25px',
  },
  cardGroup: {
    width: '100%',
    bottom: '0',
    position: 'fixed',
    border: '2px solid indigo'
  }
};

let pointsArr = points;

export class DataPoints extends Component {
  state = {
    points: pointsArr
  };

  componentWillMount() {
    this.setState({
      pointLeaders: this.pointLeaders
    });
  }

  points = this.state.points.map(function(item, i) {
    return (
      <Card className="notActive" style={cardStyle.notActive} key={i}>
        {item.name}<br/> {item.points.toLocaleString('en', { useGrouping: true })}
      </Card>
    );
  });

  render() {
    return (
      <div>
        <LebronTracker pointTotal={this.lebronPoints} />
        <div style={cardStyle.cardGroup}>
        {this.points}
      </div>
      </div>
    );
  }
}

export default DataPoints;
