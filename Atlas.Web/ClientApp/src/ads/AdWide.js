import React from 'react';
import postscribe from 'postscribe';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    adWrapper: {
        position: 'relative',
    }
});

const scribeId = 'amazon-ad-2'

class AdScriptWide extends React.Component {
    componentDidMount() {
        let code = `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "true";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "manual";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Amazon";
amzn_assoc_asins = "B07DJRFSL1,B00DBF81JS,B07HCZ7LPW,B00634Z6BA,B00KK8ZLEC,B019AKA6YU,B0781Z7Y3S,B07C8Y31G2,B01LYNEIEI,B01KVZBNY0,B07JB58VK6";
amzn_assoc_linkid = "9397afc48673190e83908aff1a349816";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`;
        postscribe('#' + scribeId, code);
    }
    render() {
        const { classes } = this.props;

        return (
            <div id={scribeId} className={classes.adWrapper}></div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AdScriptWide);