import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { actionCreators as MapActions } from '../store/MapStore';
import { bindActionCreators } from 'redux';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListSubheader from '@material-ui/core/ListSubheader';
import MapCoordinateLocator from './MapCoordinateLocator';

const styles = theme => ({
    controls: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 1000,
    },
    icons: {
        fontSize: '20px',
        lineHeight: '24px',
        width: '24px',
        height: '24px',
    },
    mapLeftControl: {
        minWidth: '320px',
        width: '320px',
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.up('md')]: {
        },
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
    },
    mapControlPaper: {
        position: 'relative'
    },
    controlCloseLeft: {
        position: 'absolute',
        top: '0',
        right: theme.spacing.unit,
    },
});

class MapDrawerSearch extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Drawer className={classes.mapLeftControl} open={this.props.mapControls.showSearchControl} variant='persistent'
                classes={{
                    paper: classes.mapControlPaper
                }}
            >
                <List className={classes.controls}>
                    <ListSubheader>
                        Search
                            <IconButton className={classes.controlCloseLeft} onClick={this.props.closeSearchControl} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </ListSubheader>
                    <ListItem>
                        <MapCoordinateLocator updateMapCoordinateLocator={this.props.updateMapCoordinateLocator}/>
                    </ListItem>
                    <Divider />
                
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapDrawerSearch);
