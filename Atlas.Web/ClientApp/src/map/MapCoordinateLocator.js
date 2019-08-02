import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { actionCreators as MapActions } from '../store/MapStore';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: theme.palette.primary.main,
        width: '100%',
    },
    xyInput: {
        marginLeft: 8,
        flex: 1,
        width: '100px',
        zIndex: 1000,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    xInput: {
    },
    yInput: {
        marginLeft: '5px',
    },
})

class MapCoordinateLocator extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            lat: 0,
            lng: 0
        }
    }

    changeLat = e => {
        e.persist();
        this.setState(state => {
            return {
                ...state,
                lat: e.target.value
            }
        })
    };
    changeLng = e => {
        e.persist();
        this.setState(state => {
            return {
                ...state,
                lng: e.target.value
            }
        })
    };
    handleLocate = () => {
        this.props.updateMapCoordinateLocator({
            show: true,
            zoom: 5,
            coordinates: {
                lat: parseFloat(this.state.lat),
                lng: parseFloat(this.state.lng)
            },
            name: `Lng: ${this.state.lng} | Lat: ${this.state.lat}`
        })
    }

    handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            this.handleLocate();
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={1}>
                <Input className={classNames(classes.xyInput, classes.xInput)} placeholder="Lng" onChange={evt => this.changeLng(evt)} type={"number"} onKeyPress={this.handleKeyPress} />
                <Divider className={classes.divider} />
                <Input className={classNames(classes.xyInput, classes.yInput)} placeholder="Lat" onChange={evt => this.changeLat(evt)} type={"number"} onKeyPress={this.handleKeyPress} />
                <Divider className={classes.divider} />
                <IconButton className={classes.iconButton} aria-label="Find" onClick={this.handleLocate} onKeyPress={this.handleKeyPress} >
                    <MyLocationIcon />
                </IconButton>
            </Paper>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapCoordinateLocator);
