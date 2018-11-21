import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WavesIcon from '@material-ui/icons/Waves';
import SurveyIcon from '@material-ui/icons/QuestionAnswer';
import ListIcon from '@material-ui/icons/List';


import DashBoard from '../dash/DashBoard';
import ConceptBoard from '../concept/ConceptBoard';
import SurveyBoard from '../survey/SurveyBoard';
import SurveyRunner from '../survey/SurveyRunner';
import SurveyEditor from '../survey/SurveyEditor';
import UnitBoard from '../units/UnitBoard';
import ProgramBoard from '../program/ProgramBoard';
import ReferenceBoard from '../reference/ReferenceBoard';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'left',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

const Tool_DashBoard = 1;
const Tool_Concept   = 2;
const Tool_Program   = 3;
const Tool_Units     = 4;
const Tool_Reference = 5;
const Tool_Survey    = 6;
const Tool_Structure = 7;
const Tool_Set       = 8;
const Tool_Table     = 9;

const Tool_SurveyEdit    = 10;
const Tool_SurveyTest    = 11;

 


class PersistentDrawer extends React.Component {
  state = {
    open: false,
    tool: Tool_DashBoard
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDashBoardOn = () => {
      this.setState({tool : Tool_DashBoard});
  }

  handleConceptOn = () => {
    this.setState({tool : Tool_Concept});
  }

  handleProgramOn = () => {
    this.setState({tool : Tool_Program});
  } 

  handleUnitOn = () => {
    this.setState({tool : Tool_Units});
  }  

  handleReferenceOn = () => {
    this.setState({tool : Tool_Reference});
  }    

  handleSurveyOn = () => {
    this.setState({tool : Tool_Survey});
  }  

  handleStructureOn = () => {
    this.setState({tool : Tool_Structure});
  }  

  handleSetOn = () => {
    this.setState({tool : Tool_Set});
  }   

  handleTableOn = () => {
    this.setState({tool : Tool_Table});
  } 

  handleSurveyTestOn = () => {
    this.setState({tool : Tool_SurveyTest});
  }   

  handleSurveyEditOn = () => {
    this.setState({tool : Tool_SurveyEdit});
  }   

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const { tool } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
   
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })} 
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
             <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>AIM</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
           
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          
          </div>
          <Divider />
          <List>
            <ListItem button key='dash' onClick={this.handleDashBoardOn} >
                <ListItemIcon><WavesIcon/></ListItemIcon>
                <ListItemText primary ='Dashboard' />
            </ListItem>
          </List>           
          <Divider />
         
          <List>
            <ListItem button key='concept' onClick={this.handleConceptOn}>
                <ListItemIcon><WavesIcon/></ListItemIcon>
                <ListItemText primary ='Concepts' />
            </ListItem>
            <ListItem button key='program' onClick={this.handleProgramOn}  >
                <ListItemIcon><WavesIcon/></ListItemIcon>
                <ListItemText primary ='Programs' />
            </ListItem>             
            <ListItem button key='units' onClick={this.handleUnitOn}  >
                <ListItemIcon><WavesIcon/></ListItemIcon>
                <ListItemText primary ='Units' />
            </ListItem>     
            <ListItem button key='reference' onClick={this.handleReferenceOn}  >
                <ListItemIcon><ListIcon/></ListItemIcon>
                <ListItemText primary ='Reference Data' />
            </ListItem>                    
          </List> 

         <Divider />
          <List>
            <ListItem button key='Survey' onClick={this.handleSurveyOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Surveys' />
            </ListItem>   
            <ListItem button key='SurveyEdit' onClick={this.handleSurveyEditOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Survey Editor' />
            </ListItem> 
            <ListItem button key='SurveyTest' onClick={this.handleSurveyTestOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Survey Test' />
            </ListItem>                                         
          </List>  
          <Divider />
          <List>
            <ListItem button key='structures' onClick={this.handleStructureOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Data Structures' />
            </ListItem>
            <ListItem button key='sets' onClick={this.handleSetOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Data Sets' />
            </ListItem>            
            <ListItem button key='tables' onClick={this.handleTableOn}  >
                <ListItemIcon><SurveyIcon/></ListItemIcon>
                <ListItemText primary ='Data Tables' />
            </ListItem>             
          </List>  
          <Divider />
         
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >             
        <div className={classes.drawerHeader} />       
              
          {  tool === Tool_DashBoard &&
            <DashBoard/>
          }
          {  tool === Tool_Program &&
            <ProgramBoard/>
          }          

          {  tool === Tool_Concept &&
            <ConceptBoard/>
          }  

          {  tool === Tool_Reference &&
            <ReferenceBoard/>
          } 
           

          {  tool === Tool_Survey &&
            <SurveyBoard/>
          } 

          {  tool === Tool_SurveyEdit &&
            <SurveyEditor/>
          } 

          {  tool === Tool_SurveyTest &&
            <SurveyRunner/>
          }           

          {  tool === Tool_Structure &&
            <ConceptBoard/>
          }    

          {  tool === Tool_Units&&
            <UnitBoard/>
          }
                      
        </main>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);