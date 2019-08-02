import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import LabelIcon from '@material-ui/icons/Label';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';

import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    root: {
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
    controlCloseLeft: {
        position: 'absolute',
        top: '0',
        right: theme.spacing.unit,
    }
});

class MapLayersDrawer extends React.PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <Drawer className={classes.root} open={this.props.mapControls.showLayersControl} variant='persistent'
                classes={{
                    paper: classes.mapControlPaper
                }}
            >
                <List className={classes.controls}>
                    <ListSubheader>
                        Layers
                            <IconButton className={classes.controlCloseLeft} onClick={this.props.closeLayersControl} >
                            <ChevronLeftIcon />
                        </IconButton>
                    </ListSubheader>
                    <Divider />
                    <ListItem button onClick={this.props.toggleGridLabels}>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary="Grid Labels" />
                        <Switch checked={this.props.mapControls.showGridLabels} />
                    </ListItem>
                    <ListItem button onClick={this.props.toggleBiomes}>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon >
                        <ListItemText primary="Biomes" />
                        <Switch checked={this.props.mapControls.showBiomes} />
                    </ListItem>
                    <ListItem button onClick={this.props.toggleFreeports}>
                        <ListItemIcon>
                            <span className={classNames(classes.icons, 'fa fa-anchor')}></span>
                        </ListItemIcon >
                        <ListItemText primary="Freeports" />
                        <Switch checked={this.props.mapControls.showFreeports} />
                    </ListItem>
                    <ListItem button onClick={this.props.toggleLawless}>
                        <ListItemIcon>
                            <span className={classNames(classes.icons, 'fa fa-gavel')}></span>
                        </ListItemIcon >
                        <ListItemText primary="Lawless" />
                        <Switch checked={this.props.mapControls.showLawless} />
                    </ListItem>
                    <ListItem button onClick={this.props.toggleVoyageOfPower}>
                        <ListItemIcon>
                            <span className={classNames(classes.icons, 'fa fa-ship')}></span>
                        </ListItemIcon >
                        <ListItemText primary="Voyage of Power" />
                        <Switch checked={this.props.mapControls.showVoyageOfPower} />
                    </ListItem>
                    <ListItem button onClick={this.props.toggleFountainOfYouth}>
                        <ListItemIcon>
                            <span className={classNames(classes.icons, 'fa fa-university')}></span>
                        </ListItemIcon >
                        <ListItemText primary="Fountain / Ruins" />
                        <Switch checked={this.props.mapControls.showFountainOfYouth} />
                    </ListItem>
                    <ListItem button onClick={this.props.togglePopulations}>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon >
                        <ListItemText primary="Player Counts" />
                        <Switch checked={this.props.mapControls.showPopulations} />
                    </ListItem>
                    <ListItem button onClick={this.props.togglePopulationShading}>
                        <ListItemIcon>
                            <span className={classNames(classes.icons, 'fa fa-fire')}></span>
                        </ListItemIcon >
                        <ListItemText primary="Player Heatmap" />
                        <Switch checked={this.props.mapControls.showPopulationShading} />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapLayersDrawer);
