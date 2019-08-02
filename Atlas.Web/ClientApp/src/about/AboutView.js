import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AtlasAppBar from '../common/AtlasAppBar';

import { textPageStyle } from '../Layout';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    fab: {
        marginRight: theme.spacing.unit,
    },
    fabIcon: {
        overflow: 'visible'
    },
    contactDivStyle: {
        textAlign: 'center',
        padding: '20px',
    }
});
class ContactView extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <AtlasAppBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        About
                    </Typography>
                </AtlasAppBar>
                <Grid container spacing={8} style={textPageStyle}>
                    <Grid item xs={false} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>About</Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>
                            Atlas is an online PC video game currently in Early Access on Steam.
                            AtlasGame.Info provides an up to date, high quality digital map that aims to assist in your Atlas game experience.
                    </Typography>
                        <Typography variant="body1" gutterBottom>
                            If you enjoy this app, please consider visiting the donate page, or using one of the affiliate needs for your Amazon shopping needs. Ad revenue will go towards paying for server costs and supporting the continuation of development.
                    </Typography>
                        <Typography variant="body1" gutterBottom>AtlasGame.Info is an unofficial website, not affiliated with Grapeshot Games in any way. You can find the Atlas Steam page via the button below.</Typography>
                        <div className={classes.contactDivStyle}>
                            <Fab color="secondary" size="medium" component="a" secondary={classes.fab} className={classes.fab} href="https://store.steampowered.com/app/834910/ATLAS/" tooltip="Steam" target="_blank" rel="noopner noreferrer">
                                <Icon className={classNames('fab fa-steam', classes.fabIcon)} />
                            </Fab>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(ContactView);
