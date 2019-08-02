import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AdWide from '../ads/AdWide';
import AtlasAppBar from '../common/AtlasAppBar';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import { textPageStyle } from '../Layout';


const styles = theme => ({
    links: {
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    patreon: {
        height: '50px'
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class DonateView extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AtlasAppBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Donate
                    </Typography>
                </AtlasAppBar>
                <Grid container spacing={8} style={textPageStyle}>
                    <Grid item xs={false} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>Support</Typography>
                        <Divider />
                        <br />
                        <Typography paragraph gutterBottom>
                            I built this app to help centralize useful information about the Atlas video game world.
                            When looking for information regarding the game world, I found myself having many different informational resources open on a second monitor.
                            My goal has been to centralize as much information as I can gather into a single resource.
                            This app is currently built and maintained entirely in my free time, with server costs coming out of my own pocket.
                        </Typography>
                        <Typography paragraph gutterBottom>
                            If you are an Amazon user, please consider using the affiliate links provided on this page. Any purchases done through an affiliate link will provide revenue to continue app development and help cover monthly server costs.
                            For anyone who may be interested in contributing more directly, paypal or patreon are donations great ways to do so.
                            Any form of support is greatly appreciated. Thank you for using AtlasGame.Info!
                        </Typography>
                        <div className={classes.links}>
                            <Fab color="secondary" variant="extended" aria-label="Delete" className={classes.fab} href="https://amzn.to/2t5ctrh" tooltip="Amazon" target="_blank">
                                <Icon className={classNames('fab fa-amazon', classes.fabIcon, classes.extendedIcon)} />
                                Shop Amazon
                            </Fab>
                            <a href="https://www.patreon.com/bePatron?u=16810662" target="_blank">
                                <img src="/become_a_patron_button.png" className={classes.patreon} />
                            </a>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="2YDV2KCY6CAF4" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="paypal" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </div>
                    <AdWide />
                </Grid>
                </Grid>
            </div >
        );
    }
}

export default withStyles(styles, { withTheme: true })(DonateView);