import React from 'react';
import classNames from 'classnames';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MapIcon from '@material-ui/icons/Map';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SecurityIcon from '@material-ui/icons/Security';
import MenuIcon from '@material-ui/icons/Menu';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import DirectionsIcon from '@material-ui/icons/Directions';

import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const drawerWidth = 250;
const toolbarHeight = 48;
export const contentHeight = 'calc(100vh - ' + (toolbarHeight) + 'px) ';

const styles = theme => ({
    root: {
        display: 'flex',
        paddingLeft: '5px',
    },
    menuButton: {
        marginLeft: 6,
        marginRight: theme.spacing.unit,
        textAlign: 'center'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        height: '48px',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: toolbarHeight + 'px',
        width: '100%',
        position: 'relative',
    },
    content: {
        height: contentHeight,
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
    },
    grow: {
        flexGrow: '1'
    },
    appBarIcon: {
        fontSize: '24px',
        color: 'white',
        marginRight: '16px'
    }
});

class AtlasAppBar extends React.PureComponent {
    state = {
        open: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({ open: open });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="fixed" className={classes.root}>
                    <Toolbar disableGutters={true} variant="dense">
                        {this.props.children}
                        <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                        </Typography>
                        <IconButton color="inherit" aria-label="Suport" className={classes.menuButton} component="a" href="/support" target="_blank" rel="noopner noreferrer">
                            <Tooltip title="Support" aria-label="Support" placement="right">
                                <SentimentVerySatisfiedIcon />
                            </Tooltip>
                        </IconButton>
                        <IconButton color="inherit" aria-label="Open drawer" className={classes.menuButton} onClick={this.toggleDrawer(true)}>
                            <Tooltip title="Navigate" aria-label="Site Navigation" placement="right">
                                <MenuIcon />
                            </Tooltip>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer open={this.state.open} onClose={this.toggleDrawer(false)} onOpen={this.toggleDrawer(true)} anchor="right">
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.toggleDrawer(false)}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={'Map'} component={Link} to="/map">
                            <ListItemIcon><MapIcon /></ListItemIcon>
                            <ListItemText primary={'Map'} />
                        </ListItem>
                        <ListItem button key={'Calculators'} component={Link} to="/tools" disabled>
                            <ListItemIcon><KeyboardIcon /></ListItemIcon>
                            <ListItemText primary={'Calculators'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={'Roadmap'} component={Link} to="/development">
                            <ListItemIcon><DirectionsIcon /></ListItemIcon>
                            <ListItemText primary={'Roadmap'} />
                        </ListItem>
                        <ListItem button key={'Support'} component={Link} to="/support">
                            <ListItemIcon><SentimentVerySatisfiedIcon /></ListItemIcon>
                            <ListItemText primary={'Support'} />
                        </ListItem>
                        <ListItem button key={'Contact'} component={Link} to="/contact">
                            <ListItemIcon><EmailIcon /></ListItemIcon>
                            <ListItemText primary={'Contact'} />
                        </ListItem>
                        <ListItem button component="a" href="https://discord.gg/ZFFgrT5" target="_blank">
                            <Icon className={classNames(classes.appBarIcon, 'fab fa-discord')} />
                            <ListItemText primary={'Discord'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={'Privacy'} component={Link} to="/privacy">
                            <ListItemIcon><SecurityIcon /></ListItemIcon>
                            <ListItemText primary={'Privacy'} />
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AtlasAppBar);