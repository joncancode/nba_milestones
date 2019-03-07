import React, { Component } from 'react';
import points from '../data/DataPoints.json';
import Card from '@material-ui/core/Card';
import LebronTracker from './LebronTracker';

const styles = {
  notActive: {
    margin: '0 auto',
    display: 'inline-block',
    width: '20%',
    textAlign: 'center',
    padding: '3em',
  },
  cardGroup: {
    width: '100%',
    bottom: '0',
    position: 'fixed',
    border: '2px solid indigo',
    textAlign: 'center'
  }
};

const pointsArr = points;

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
      <Card className="notActive" style={styles.notActive} key={i}>
        {item.name}<br/> {item.points.toLocaleString('en', { useGrouping: true })}
      </Card>
    );
  });

  render() {
    return (
      <div>
        <LebronTracker pointTotal={this.lebronPoints} />
        <div style={styles.cardGroup}>
        {this.points}
      </div>
      </div>
    );
  }
}

export default DataPoints;
