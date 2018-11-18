import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';

const styles = {
  list: {
    width: 250
  }
};

class Sidebar extends React.Component {
  state = {
    left: false
  };
  
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Scoreboard'].map((text, index) => (
            <ListItem key={text} button component="a" href="/scores">
              <ListItemText primary={text} />
              {/* <a href="/scores">Maybe scores?</a> */}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Points', 'Assists', 'Rebounds', 'Blocks', 'Steals'].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </div>
    );

    return (
      <div>
        <Button
          style={{ fontSize: '32px', marginRight: '25px' }}
          onClick={this.toggleDrawer('left', true)}
        >
          <span role="img" aria-label="open-drawer">🏀</span>
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
