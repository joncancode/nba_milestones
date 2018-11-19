import React, {Component} from 'react';

export class Scoreboard extends Component {
    render(props) {
        return (
          <div>
            {this.props.games}
          </div>
        )
      }
    }

export default Scoreboard;
