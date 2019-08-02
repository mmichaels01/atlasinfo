import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

import AtlasMap from './Map';
import MapLayersDrawer from './MapDrawerLayers';
import MapDrawerSearch from './MapDrawerSearch';
import MapInfoSummary from './MapInfoSummary';
import MapControlClusterPicker from './MapControlClusterPicker';
import AtlasAppBar from '../common/AtlasAppBar';
import SpinningIcon from '../common/SpinningIcon';
import { actionCreators as MapActions } from '../store/MapStore';
import { actionCreators as MapControlActions } from '../store/MapControlsStore';
import { actionCreators as ClusterActions } from '../store/ClusterStore';
import { contentHeight } from '../Layout';

const baseButtonPad = 10;
const buttonSize = 55;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    controls: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 1000,
    },
    map: {
        width: '100%',
        height: contentHeight,
        position: 'inherited',
        backgroundColor: 'transparent'
    },
    layersControlOpenButton: {
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            left: baseButtonPad,
            top: baseButtonPad,
        },
        [theme.breakpoints.up('md')]: {
            top: baseButtonPad,
            left: baseButtonPad,
        },
        zIndex: 1000
    },
    searchControlButton: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            left: baseButtonPad,
            top: baseButtonPad + buttonSize,
        },
        [theme.breakpoints.up('md')]: {
            bottom: baseButtonPad,
            left: baseButtonPad + buttonSize,
        },
        zIndex: 1000,
    },
    homeControlButton: {
        position: 'absolute',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
        [theme.breakpoints.down('sm')]: {
            left: baseButtonPad,
            top: baseButtonPad + buttonSize * 2,
        },
        [theme.breakpoints.up('md')]: {
            bottom: baseButtonPad,
            left: baseButtonPad,
        },
        zIndex: 1000,
    },
    refreshControlButton: {
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            left: baseButtonPad,
            top: baseButtonPad + buttonSize * 3,

        },
        [theme.breakpoints.up('md')]: {
            bottom: baseButtonPad + 55,
            left: baseButtonPad,
        },
        zIndex: 1000,
    },
    mapInfoSummary: {
        zIndex: '999',
        position: 'absolute',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            bottom: theme.spacing.unit + 80,
            width: '300px',
            left: 'calc(50% - 150px)',
        },
        [theme.breakpoints.up('md')]: {
            bottom: 20,
            width: '400px',
            left: 'calc(50% - 200px)',
        },
    },
});

class MapView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mouseLat: 0,
            mouseLng: 0,
            grid: 'A1'
        }
    }

    componentDidMount() {
        this.props.requestPlayerCountForServer();
    }

    handleMouseMove = event => {
        this.setState(() => {
            let lat = 0;
            let lng = 0;
            if (event.latlng && event.latlng.lat)
                lat = event.latlng.lat.toFixed(2);
            if (event.latlng && event.latlng.lng)
                lng = event.latlng.lng.toFixed(2);

            return {
                mouseLat: lat,
                mouseLng: lng
            };
        })
    }

    handleGridCellMouseOver = (event, cell) => {
        this.setState(() => {
            return {
                grid: cell.name,
            };
        })
    }

    handleGridCellMouseOut = (event, cell) => {
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mapView}>
                <AtlasAppBar>
                    <MapControlClusterPicker cluster={this.props.cluster} mapControls={this.props.mapControls} changeClusterId={this.props.changeClusterId} />
                </AtlasAppBar>
                <AtlasMap mouseEventCallback={this.handleMouseMove}
                    map={this.props.map}
                    cluster={this.props.cluster}
                    mapControls={this.props.mapControls}
                    gridCellMouseOverCallback={this.handleGridCellMouseOver}
                    gridCellMouseOutCallback={this.handleGridCellMouseOut}
                    serverSnapshots={this.props.cluster.serverSnapshots}
                >
                </AtlasMap>
                <MapLayersDrawer
                    mapControls={this.props.mapControls}
                    closeLayersControl={this.props.closeLayersControl}
                    toggleGridLabels={this.props.toggleGridLabels}
                    toggleBiomes={this.props.toggleBiomes}
                    toggleFreeports={this.props.toggleFreeports}
                    toggleLawless={this.props.toggleLawless}
                    toggleVoyageOfPower={this.props.toggleVoyageOfPower}
                    toggleFountainOfYouth={this.props.toggleFountainOfYouth}
                    togglePopulations={this.props.togglePopulations}
                    togglePopulationShading={this.props.togglePopulationShading}
                />
                <MapDrawerSearch
                    mapControls={this.props.mapControls}
                    closeSearchControl={this.props.closeSearchControl}
                    updateMapCoordinateLocator={this.props.updateMapCoordinateLocator}
                />
                <Tooltip title="Toggle Map Layers" aria-label="Toggle Map Layers" placement="right">
                    <Fab color="secondary" size="medium" onClick={this.props.openLayersControl} className={classes.layersControlOpenButton}>
                        <SettingsIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="Reset Map Position" aria-label="Reset Map Position" placement="right">
                    <Fab color="secondary" size="medium" onClick={this.props.reset} className={classes.homeControlButton}>
                        <HomeIcon />
                    </Fab>
                </Tooltip>
                <Tooltip title="Refresh Live Data" aria-label="Refresh Live Data" placement="right">
                    <SpinningIcon spinnerColor="secondary" color="primary" size="medium" onClick={this.props.toggleAutoRefresh} className={classes.refreshControlButton} animate={this.props.mapControls.autoRefresh}>
                        <RefreshIcon />
                    </SpinningIcon>
                </Tooltip>
                <Tooltip title="Search Tools" aria-label="Search Tools" placement="right">
                    <Fab color="primary" size="medium" onClick={this.props.openSearchControl} className={classes.searchControlButton}>
                        <SearchIcon />
                    </Fab>
                </Tooltip>
                <div className={classes.mapInfoSummary}>
                    <MapInfoSummary lat={this.state.mouseLat} lng={this.state.mouseLng} grid={this.state.grid} clusterTimestamp={this.props.cluster.clusterTimestamp} playersOnline={this.props.cluster.playerCount} />
                </div>
            </div>
        );
    }
}

export default connect(state => state, dispatch => bindActionCreators({ ...MapControlActions, ...MapActions, ...ClusterActions }, dispatch))(withStyles(styles, { withTheme: true })(MapView));