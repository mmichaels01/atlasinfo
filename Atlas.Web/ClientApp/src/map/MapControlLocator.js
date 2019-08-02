import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { actionCreators as MapActions } from './MapActions';
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
        minWidth: '240px',
        width: '15%',
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
});

class MapLocatorDrawer extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Drawer className={classes.mapLeftControl} open={this.props.mapControls.showLocatorsControl} variant='persistent'
                classes={{
                    paper: classes.mapControlPaper
                }}
            >
                <List className={classes.controls}>
                    <ListSubheader>
                        Locator
                            <IconButton className={classes.controlCloseLeft} onClick={this.props.closeLocatorsControl} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </ListSubheader>
                    <Divider />
                    <ListItem>
                        <MapCoordinateLocator />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default connect(state => state.map, dispatch => bindActionCreators(MapActions, dispatch))(withStyles(styles, { withTheme: true })(MapLocatorDrawer));
