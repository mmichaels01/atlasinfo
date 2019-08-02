import React from 'react';
import Iframe from 'react-iframe'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    adWrapper: {
        display: 'flex'
    },
    frame: {
        flexGrow: 1,
    }
});

export class AdIframe extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.adWrapper}>
                <Iframe url="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=twitchprime&banner=025E4WXKK5G4EXYGDD02&f=ifr&lc=pf4&linkID=fe1c2eeaff49e29c3b19cde844431468&t=atlasgameinfo-20&tracking_id=atlasgameinfo-20"
                    width="300"
                    height="250"
                    scrolling="no"
                    border="0"
                    marginwidth="0"
                    style={{ border: "none" }}
                    position="relative"
                    frameborder="0"
                    className={classes.frame}
                />
                <Iframe url="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=echodevices_2019_sales&banner=01HWQ2MB2VN3FAN7NCR2&f=ifr&lc=pf4&linkID=7e13384336d6774946074d3721837ae6&t=atlasgameinfo-20&tracking_id=atlasgameinfo-20"
                    width="300"
                    height="250"
                    scrolling="no"
                    border="0"
                    marginwidth="0"
                    style={{ border: "none" }}
                    position="relative"
                    frameborder="0"
                    className={classes.frame}
                />
                <Iframe url="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=amzn_firetv_decembertpr&banner=1RGY50AZXV9P03PBXYR2&f=ifr&lc=pf4&linkID=0e68f315c5dc7b3fca1e6ed140dcb555&t=atlasgameinfo-20&tracking_id=atlasgameinfo-20"
                    width="300"
                    height="250"
                    scrolling="no"
                    border="0"
                    marginwidth="0"
                    style={{ border: "none" }}
                    position="relative"
                    frameborder="0"
                    className={classes.frame}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AdIframe);