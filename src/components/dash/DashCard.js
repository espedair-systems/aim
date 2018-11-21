import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 10,
  },
  actions: {
    display: 'flex',
  },
  
});

class DashCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    const bull = <span className={classes.bullet}>•</span>;

  return (
     <Card className={classes.card} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          A
          {bull}
          I
          {bull}
          M
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          verb
        </Typography>
        <Typography component="p">
          To author meta-data
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
  );
  }
}

DashCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashCard);