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
import DataAssists from './DataAssists';

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
            <ListItem key={text} button component="a" href="#/">
              <ListItemText primary="Scoreboard" />
            </ListItem>
           ))}
          </List>
         <Divider />
         <List>
             <ListItem key="points" button component="a" href="#/points">
               <ListItemText primary="Points" />
             </ListItem>
             <ListItem key="assists" button component="a" href="#/assists">
               <ListItemText primary="Assists" />
             </ListItem>
             <ListItem key="rebounds" button component="a" href="#/rebounds">
               <ListItemText primary="Rebounds" />
             </ListItem>
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
