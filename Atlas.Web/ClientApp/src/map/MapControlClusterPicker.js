import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import { clusters } from './MapConstants';

const styles = theme => ({
    root: {
        height: '48px',
        display: 'inline-block',
        position: 'relative',
        marginLeft: '-5px',
    },
    formControl: {
        position: 'relative',
        height: '100%',
        width: 'auto',
    },
    select: {
        position: 'relative',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.15),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        '& select': {
            padding: '0 32px 0 5px',
            boxSizing: 'border-box',
            lineHeight: '48px',
            height: '48px',
            width: '100%',
        }
    },
    option: {
        color: 'black'
    },
});
class MapControlClusterPicker extends React.PureComponent {
    handleChange = action => event => {
        action(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <Select
                        native
                        id="map-cluster-picker"
                        value={this.props.cluster.id}
                        name="cluster"
                        onChange={this.handleChange(this.props.changeClusterId)}
                        input={<FilledInput name="cluster" id="map-cluster-picker" />}
                        className={classes.select}>
                        {
                            clusters.map(cluster =>
                                <option value={cluster.id} key={`clusterPicker${cluster.id}`} className={classes.option}>{cluster.display}</option>
                            )
                        }
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapControlClusterPicker);
