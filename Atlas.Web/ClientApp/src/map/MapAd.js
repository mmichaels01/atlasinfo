import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { actionCreators as MapActions } from '../store/MapStore';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

const styles = theme => ({
    controls: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 1000,
    },
    adControl: {
        minWidth: '240px',
        width: '240px',
        position: 'absolute',
        right: 0,
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
    controlCloseRight: {
        position: 'absolute',
        top: '0',
        left: theme.spacing.unit,
    },
    controlCloseAd: {
        position: 'absolute',
        top: '0',
        right: theme.spacing.unit,
    },
    mapAd: {
        position: 'relative',
        display: 'block',
        width: '100%',
    },
    donateButton: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
    donateLink: {
        textAlign: 'center',
        paddingRight: '0',
    }
});

class MapAdDrawer extends React.PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Drawer className={classes.adControl} anchor="right" open={this.props.mapControls.showInfoControl} variant='persistent'
                classes={{
                    paper: classes.mapControlPaper
                }}
            >
                <List className={classes.controls}>
                    <ListSubheader>
                        Support Development
                        <IconButton className={classes.controlCloseAd} onClick={this.props.closeInfoControl} >
                            <CloseIcon />
                        </IconButton>
                    </ListSubheader>
                    <Divider />
                    <Divider />
                    <ListItem button key={'Donate'} component={Link} to="/donate" className={classes.donateButton} target={"_blank"} rel={"noopener noreferrer"}>
                        <ListItemText primary={'Support Development'} className={classes.donateLink} />
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        );
    }
}

export default connect(state => state.map, dispatch => bindActionCreators(MapActions, dispatch))(withStyles(styles, { withTheme: true })(MapAdDrawer));