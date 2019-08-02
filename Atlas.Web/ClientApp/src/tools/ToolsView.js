import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles';
import { textPageStyle } from '../Layout';

class ToolsView extends React.Component {
    render() {
        return (
            <Grid container spacing={8} style={textPageStyle}>
                <Grid item xs={0} sm={3}></Grid>
                <Grid item xs={12} sm={6} alignContent="center">
                    <Typography variant="h4" gutterBottom>Material Calculators Coming Soon &trade;</Typography>
                    <Divider />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles({}, { withTheme: true })(ToolsView);
