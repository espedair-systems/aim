import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import DashCard from './DashCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class DashBoard extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (

      <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
      <Grid item xs={12}>
      <Paper className={classes.control}>
          <Grid container>
          <Grid item>   
             <DashCard/> 
          </Grid>
         </Grid>
      </Paper>
     </Grid>
    </Grid>
    
    );
  }
}

DashBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashBoard);

/**

**/