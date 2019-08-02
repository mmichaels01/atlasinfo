import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';


const styles = theme => ({
    root: {
        padding: '0 4px 4px 4px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    typ: {
        flex: 1,
        display: 'block',
        position: 'relative'
    },
    label: {
        position: 'absolute',
        bottom: '-10px',
        left: '0',
        width: '100%',
        textAlign: 'center',
        fontSize: theme.typography.fontSize * .8
    }

})

let staleTimer = null;

class MapInfoSummary extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            staleSeconds: 0
        }
    }

    setStaleState = () => {
        if (!this.props.clusterTimestamp)
            this.setState(() => {
                return {
                    staleSeconds: 90
                };
            })

        let timestamp = moment.utc(this.props.clusterTimestamp)
        let diff = moment().diff(timestamp, 'seconds');

        this.setState(() => {
            return {
                staleSeconds: diff
            };
        })
    }

    componentDidMount() {
        staleTimer = setInterval(() => this.setStaleState(), 1000)
    }

    componentWillUnmount() {
        clearInterval(staleTimer);
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography variant="body1" className={classes.typ}>
                    <span className={classes.label}>
                        Lat
                    </span>
                    {this.props.lat}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" className={classes.typ}>
                    <span className={classes.label}>
                        Lng
                    </span>{this.props.lng}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" className={classes.typ}>
                    <span className={classes.label}>
                        Grid
                    </span> {this.props.grid}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" className={classes.typ}>
                    <span className={classes.label}>
                        Refreshed
                    </span> {this.state.staleSeconds}s
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" className={classes.typ}>
                    <span className={classes.label}>
                        Online
                    </span> {this.props.playersOnline}
                </Typography>
            </Paper>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapInfoSummary);



