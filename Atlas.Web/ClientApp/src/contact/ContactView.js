import React from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
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
                        Contact
                    </Typography>
                </AtlasAppBar>
                <Grid container spacing={8} style={textPageStyle}>
                    <Grid item xs={false} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>Contact</Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>AtlasGame.Info is an unofficial app, not associated with Grapeshot Games in any way. You can find the AtlasGame steam page via the button below.
                    </Typography>
                        <div className={classes.contactDivStyle}>
                            <Fab color="secondary" size="medium" component="a" secondary={classes.fab} className={classes.fab} href="https://store.steampowered.com/app/834910/ATLAS/" tooltip="Steam" target="_blank" rel="noopner noreferrer">
                                <Icon className={classNames('fab fa-steam', classes.fabIcon)} />
                            </Fab>
                        </div>
                        <Typography variant="body1" gutterBottom>This website is under active development and is in an early beta state. You may experience bugs, discover incorrect data, or other issues.
                        For suggestions, feature requests, feedback, or bugs reports, we can be reached via email, discord, or twitter.</Typography>
                        <div className={classes.contactDivStyle}>
                            <Fab color="secondary" size="medium" component="a" className={classes.fab} href="mailto:atlasgameinfo@gmail.com" tooltip="Email us" target="_blank" rel="noopner noreferrer">
                                <EmailIcon className={classes.fabIcon} />
                            </Fab>
                            <Fab color="secondary" size="medium" component="a" className={classes.fab} href="https://discord.gg/ZFFgrT5" tooltip="Join our Discord" target="_blank" rel="noopner noreferrer">
                                <Icon className={classNames('fab fa-discord', classes.fabIcon)} />
                            </Fab>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(ContactView);
