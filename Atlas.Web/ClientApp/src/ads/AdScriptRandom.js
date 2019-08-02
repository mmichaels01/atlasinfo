import React from 'react';
import postscribe from 'postscribe';

import { amazonAsins } from './AdProducts';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    adWrapper: {
        position: 'relative',
    }
});

const scribeId = 'amazon-ad-2'

class AdScript2 extends React.Component {
    componentDidMount() {
        let rando1 = parseInt(Math.random() * amazonAsins.length, 10);
        let rando2 = parseInt(Math.random() * amazonAsins.length, 10);

        let code = `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "true";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "manual";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Amazon";
amzn_assoc_linkid = "9271a33bb8e4ab09d5f51367bbbcff79";
amzn_assoc_asins = "` + amazonAsins[rando1] + ',' + amazonAsins[rando2] + `"; 
</script><script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`;
        postscribe('#' + scribeId, code);
    }
    render() {
        const { classes } = this.props;

        return (
            <div id={scribeId} className={classes.adWrapper}></div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AdScript2);