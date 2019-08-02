import React from 'react';
import { Map as LeafletMap, TileLayer, Tooltip, CircleMarker, Polygon, Marker, Polyline } from 'react-leaflet'
import { CRS, Util, Transformation, DivIcon } from 'leaflet'
import { contentHeight } from '../Layout';
import { voyageOfPowerPoints, biomePolygons, freeportZones, lawlessZones, gridColumns, gridRows, fountainOfYouthPoints, ghostShipPath, getGridBoundsByName } from './MapGeometry';
import { gridData } from './MapGridData';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import moment from 'moment';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    mapView: {

    },
    map: {
        width: '100%',
        height: contentHeight,
        position: 'inherited',
        backgroundColor: 'transparent'
    },
    transparent: {
        backgroundColor: 'transparent',
        border: 'transparent',
        boxShadow: 'none'
    },
    biomeTooltip: {
        color: 'white',
        fontSize: '18px',
        fontWweight: 'bold',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
    },
    smallTooltip: {
        color: 'white',
        fontSize: '18px'
    },
    fountainIcon: {
        width: '40px !important',
        marginLeft: '-20px !important',
        marginTop: '-15px !important',
        fontSize: '30px !important',
        lineHeight: '30px !important',
        height: '30px !important',
        textAlign: 'center',
        color: theme.palette.secondary.main,
        fontFamily: theme.typography.fontFamily,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
    },
    gridLabel: {
        width: '40px !important',
        marginLeft: '-20px !important',
        marginTop: '-15px !important',
        lineHeight: '30px !important',
        height: '30px !important',
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.typography.fontFamily,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    gridLabelExterior: {
        width: '40px !important',
        marginLeft: '-20px !important',
        marginTop: '-15px !important',
        fontSize: '20px !important',
        lineHeight: '40px !important',
        height: '30px !important',
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.typography.fontFamily,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    populationLabel: {
        width: '40px !important',
        marginLeft: '-20px !important',
        textAlign: 'center',
        color: 'white',
        fontFamily: theme.typography.fontFamily,
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    populationTooltip: {
        transition: 'none !important',
        textAlign: 'center'
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
    fountainWrapper: {
        width: '360px',
    },
    fountain: {
        width: 'calc(360px - 38px)',
        height: '150px',
    }
});

const mapCrs = Util.extend({}, CRS.Simple, {
    transformation: new Transformation(1.28, 128, -1.28, 128),
});

const createDivIcon = (className, html) => new DivIcon({
    className: className,
    html: html,
    style: {
        color: 'white',
        marginLeft: '-20px',
        width: '40px',
        textAlign: 'center'
    }
});

class AtlasMap extends React.PureComponent {
    getPopulationShading = (serverSnapshots, playerMax, cell) => {
        if (!serverSnapshots || serverSnapshots.length === 0)
            return {
                opacity: 0,
                color: 'transparent'
            };
        let serverSnapshot = serverSnapshots[cell.index];
        let opacity = .5;
        if (serverSnapshot.playerCount < 0)
            return {
                color: 'purple',
                opacity: opacity
            }
        else if (serverSnapshot.playerCount >= 0 && serverSnapshot.playerCount < .25 * playerMax)
            opacity = 0;
        else if (serverSnapshot.playerCount >= .25 * playerMax && serverSnapshot.playerCount < .5 * playerMax)
            opacity = .2;
        else if (serverSnapshot.playerCount >= .5 * playerMax && serverSnapshot.playerCount < .75 * playerMax)
            opacity = .5;
        else
            opacity = .8;

        return {
            opacity: opacity,
            color: '#ff0000'
        }
    }

    getFountainShading = (serverSnapshots, playerMax, cell) => {
        if (!serverSnapshots || serverSnapshots.length === 0)
            return {
                opacity: 0,
                color: 'transparent'
            };
        let fountainCells = fountainOfYouthPoints.map(x => x.properties.grid.index);
        let fountainCounts = [];
        for (var i = 0; i < fountainCells.length; i++) {
            fountainCounts[i] = serverSnapshots[fountainCells[i]];
        }
        let serverSnapshot = serverSnapshots[cell.index];
        let color = 'purple';
        let opacity = .5;
        let colorPadScale = 2;
        if (serverSnapshot.playerCount > -1) {
            opacity = serverSnapshot === -1 ? .5 : ((serverSnapshot.playerCount + 1) * 1.0 / (playerMax * colorPadScale));
            color = 'gold';
        }

        return {
            opacity: opacity,
            color: color
        }
    }

    getPopulationText = (serverSnapshots, cell) => {
        if (!serverSnapshots || serverSnapshots.length === 0)
            return '';
        return `<span>${serverSnapshots[cell.index].playerCount === -1 ? "?" : serverSnapshots[cell.index].playerCount}</span>`;
    }

    getSnapshot = (serverSnapshots, cell) => {
        if (serverSnapshots)
            return serverSnapshots[cell.index]
        return null;
    };

    getPopulationAgeString = (last) => {
        if (!last)
            return;
        let lastTime = moment.utc(last);
        return `Cluster updated at ${moment(lastTime).local().format('HH:mm:ss')}`;
    }

    handleMouseMove = (event) => {
        this.props.mouseEventCallback(event);
    }

    handleGridCellMouseOver = (event, cell) => {
        event.target.openTooltip();
        this.props.gridCellMouseOverCallback(event, cell);
    }

    handleGridCellMouseOut = (event, cell) => {
        event.target.closeTooltip();
        this.props.gridCellMouseOutCallback(event, cell);
    }

    getGridCellColor = (name) => {
        switch (name) {
            case "High Desert":
                return "#ffcc00";
            case "Low Desert":
                return "#ff6600";
            case "Temperate":
                return "#66ff66";
            case "Equatorial":
                return "#ff0000";
            case "Tropics":
                return "#009933";
            case "Tundra":
                return "#33ffff";
            case "Polar":
                return "#ffffff";
            default:
                return "#000000";
        }
    }

    processedGridProps = gridData.map(cell => getGridBoundsByName(cell.name));

    render() {
        const { classes } = this.props;
        return (
            <LeafletMap className={classes.map}
                minZoom={this.props.map.minZoom}
                maxZoom={this.props.map.maxZoom}
                viewport={this.props.map.viewport}
                attributionControl={false}
                zoomControl={false}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                animate={true}
                dragging={true}
                crs={mapCrs}
                onMouseMove={this.handleMouseMove}
                onViewportChanged={this.onViewportChanged}>

                <TileLayer url='https://atlas-game-info.azureedge.net/atlas-slippy-1/{z}/{x}/{y}.png'
                    noWrap={true}
                    bounds={this.props.map.tileBounds}
                    keepBuffer={true}
                    attribution=" &copy; 2019 AtlasGame.Info | Not Associated With Grapeshot Games"
                    maxNativeZoom={this.props.map.maxNativeZoom} />
                {
                    this.props.serverSnapshots.map(server => {
                        if (this.props.mapControls.showPopulationShading) {
                            return (
                                <Polygon
                                    positions={server.polygon}
                                    weight={0}
                                    fillOpacity={(server.serverTier - 1) / 5}
                                    key={server.name + server.timestamp}
                                    color={server.playerCount > -1 ? '#ff0000' : 'purple'}
                                    onMouseOver={event => this.handleGridCellMouseOver(event, server)}
                                    onMouseOut={event => this.handleGridCellMouseOut(event, server)}
                                >
                                    <Tooltip direction='bottom' maxWidth={'none'} offset={[0, 15]} className={classes.populationTooltip} interactive={false}>
                                        {server.playerCount} players online<br />
                                        <strong>{this.getPopulationAgeString(this.props.cluster.clusterTimestamp)}</strong>
                                    </Tooltip>
                                </Polygon>
                            )
                        } else {
                            <Polygon
                                positions={server.polygon}
                                weight={0}
                                key={server.name + server.timestamp}
                                color={'transparent'}
                                onMouseOver={event => this.handleGridCellMouseOver(event, server)}
                                onMouseOut={event => this.handleGridCellMouseOut(event, server)}
                            >
                                <Tooltip direction='bottom' maxWidth={'none'} offset={[0, 15]} className={classes.populationTooltip} interactive={false}>
                                    {server.playerCount} players online<br />
                                    <strong>{this.getPopulationAgeString(this.props.cluster.clusterTimestamp)}</strong>
                                </Tooltip>
                            </Polygon>
                        }
                    })
                }
                {
                    this.props.mapControls.showBiomes && biomePolygons.map((polygon, i) =>
                        <Polygon
                            positions={polygon.geometry.coordinates}
                            weight={0}
                            color={this.getGridCellColor(polygon.properties.type)}
                            fillOpacity={.5}
                            key={i}
                            interactive={false}
                        >
                            <Tooltip permanent direction={'center'} className={classNames(classes.transparent, classes.biomeTooltip)} interactive={false}>
                                {polygon.properties.name}
                            </Tooltip>
                        </Polygon>
                    )}
                {
                    this.props.mapControls.showVoyageOfPower && voyageOfPowerPoints.map((point, i) =>
                        <CircleMarker center={point.geometry.coordinates} radius={15} color={point.properties.color} opacity={.7} key={i} interactive={false}>
                            <Tooltip permanent direction='top' opacity={.8} offset={[0, -5]}>
                                {point.properties.name}
                            </Tooltip>
                        </CircleMarker>
                    )
                }
                {
                    this.props.mapControls.showVoyageOfPower && (
                        <Polyline positions={ghostShipPath} color={'black'} smoothing={.5} weight={2} interactive={false}>
                            <Tooltip permanent direction='top' opacity={.8} offset={[0, -5]}>
                                Power Stone 9 - Ghost Ship Route
                            </Tooltip>
                        </Polyline>
                    )
                }
                {
                    this.props.mapControls.showFreeports && freeportZones.map((zone, i) =>
                        <Polygon
                            positions={getGridBoundsByName(zone).polygon}
                            color={'#00ff00'}
                            weight={3}
                            fillOpacity={.3}
                            key={i}
                            interactive={false}
                        >
                            <Tooltip className={classNames(classes.transparent, classes.smallTooltip)} permanent direction='center' interactive={false} opacity={.5}>
                                <span className='fa fa-anchor'></span>
                            </Tooltip>
                        </Polygon>
                    )
                }
                {
                    this.props.mapControls.showLawless && lawlessZones.map((zone, i) =>
                        <Polygon
                            positions={getGridBoundsByName(zone).polygon}
                            color={'#FFA500'}
                            fillOpacity={.3}
                            key={i}
                            interactive={false}
                        >
                            <Tooltip className={classNames(classes.transparent, classes.smallTooltip)} permanent direction='center' interactive={false} opacity={.5}>
                                <span class='fa fa-gavel'></span>
                            </Tooltip>
                        </Polygon>
                    )
                }
                {
                    this.props.mapControls.showPopulations && this.props.serverSnapshots.map(cell =>
                        <Marker interactive={false}
                            position={cell.populationPosition}
                            icon={createDivIcon(classes.populationLabel, this.getPopulationText(this.props.cluster.serverSnapshots, cell))}
                            key={cell.name + 'PopLabel'}
                            interactive={false} />
                    )
                }
                {
                    this.props.mapControls.showGrid && gridColumns.map((label, i) =>
                        <Marker interactive={false} position={label.geometry.coordinates} icon={createDivIcon(classes.gridLabelExterior, label.properties.name)} key={label.properties.name + 'Column' + i} interactive={false} />
                    )
                }
                {
                    this.props.mapControls.showGrid && gridRows.map((label, i) =>
                        <Marker interactive={false} position={label.geometry.coordinates} icon={createDivIcon(classes.gridLabelExterior, label.properties.name)} key={label.properties.name + 'Row' + i} interactive={false} />
                    )
                }
                {
                    this.props.mapControls.showGridLabels && this.processedGridProps.map(cell =>
                        <Marker interactive={false} position={cell.labelPosition} icon={createDivIcon(classes.gridLabel, cell.name)} key={cell.name + 'Label'} interactive={false} />
                    )
                }
                {
                    this.props.mapControls.showFountainOfYouth && fountainOfYouthPoints.map((node, i) => {
                        let fountainShading = this.getFountainShading(this.props.cluster.serverSnapshots, this.props.cluster.playerMax, node.properties.grid);
                        return (
                            <Polygon
                                positions={node.properties.grid.polygon}
                                color={fountainShading.color}
                                weight={3}
                                fillOpacity={fountainShading.opacity}
                                key={i}
                            >
                                <Tooltip direction='top' offset={[0, -15]}>
                                    {node.properties.name}
                                </Tooltip>
                                <Marker position={node.geometry.coordinates} key={node.properties.name + i} icon={createDivIcon(classes.fountainIcon, '<span>' + node.properties.order + '</span>')} interactive={false} />
                            </Polygon>);
                    })
                }
                {
                    this.props.map.locator.show && <CircleMarker center={this.props.map.locator.coordinates} radius={5} color={'red'} opacity={1} key={this.props.map.locator.name}>
                        <Tooltip permanent direction='top' opacity={.8}>
                            {this.props.map.locator.name}
                        </Tooltip>
                    </CircleMarker>
                }
            </LeafletMap>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AtlasMap);