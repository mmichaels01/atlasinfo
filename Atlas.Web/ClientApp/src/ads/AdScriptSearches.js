import React from 'react';
import postscribe from 'postscribe';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    adWrapper: {
        position: 'relative',
        width: '240px',
    }
});

const scribeId = 'amazon-ad-3'

class AdScriptSearches extends React.Component {
    componentDidMount() {
        let ads = [
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Sennheiser";
amzn_assoc_default_search_phrase = "sennheiser";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "0ea86f1efc22a4d10514ed634ca23e86";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Steelseries";
amzn_assoc_default_search_phrase = "steelseries";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "a50fd412ef47d4e90401dbf287d3dd79";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Energy Drinks";
amzn_assoc_default_search_phrase = "redbull";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "4d8a84d3e72b2c9ac825907d3a34aec4";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Graphics Cards";
amzn_assoc_default_search_phrase = "nvidia";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "55d0d1433e450a0ac63fcc5ab33a3601";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Computer Hardware";
amzn_assoc_default_search_phrase = "amd";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "e91cca91d1933e37512f79669242c130";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Monster Energy";
amzn_assoc_default_search_phrase = "Monster Energy";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "2c27e8afc73921c9079f8e12b0be8507";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Razer";
amzn_assoc_default_search_phrase = "Razer";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "b837c71fbecfd1905a8d0c090e629c8a";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "Asus";
amzn_assoc_default_search_phrase = "Asus";
amzn_assoc_default_category = "Electronics";
amzn_assoc_linkid = "430bb27be57f768738c953e76a265291";
amzn_assoc_default_browse_node = "172282";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`,
            `<script type="text/javascript">
       	amzn_assoc_ad_type = "banner";
	amzn_assoc_marketplace = "amazon";
	amzn_assoc_region = "US";
	amzn_assoc_placement = "assoc_banner_placement_default";
	amzn_assoc_campaigns = "tab_lnch_kar_0906";
	amzn_assoc_banner_type = "category";
	amzn_assoc_p = "14";
	amzn_assoc_isresponsive = "false";
	amzn_assoc_banner_id = "0W7VHGMZ4RW7NA3T5F02";
	amzn_assoc_width = "160";
	amzn_assoc_height = "600";
	amzn_assoc_tracking_id = "atlasgameinfo-20";
	amzn_assoc_linkid = "f140f1230c751277882a02b24481a428";
     </script>
     <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>`,
            `<script type="text/javascript">
       	amzn_assoc_ad_type = "banner";
	amzn_assoc_marketplace = "amazon";
	amzn_assoc_region = "US";
	amzn_assoc_placement = "assoc_banner_placement_default";
	amzn_assoc_campaigns = "twitchprime";
	amzn_assoc_banner_type = "category";
	amzn_assoc_p = "14";
	amzn_assoc_isresponsive = "false";
	amzn_assoc_banner_id = "1KQ611VSFHHQ71PJKR82";
	amzn_assoc_width = "160";
	amzn_assoc_height = "600";
	amzn_assoc_tracking_id = "atlasgameinfo-20";
	amzn_assoc_linkid = "f2f653585873740790c66b701a91fd03";
     </script>
     <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>`,
            `<script type="text/javascript">
amzn_assoc_placement = "adunit0";
amzn_assoc_search_bar = "false";
amzn_assoc_tracking_id = "atlasgameinfo-20";
amzn_assoc_ad_mode = "search";
amzn_assoc_ad_type = "smart";
amzn_assoc_marketplace = "amazon";
amzn_assoc_region = "US";
amzn_assoc_title = "G Fuel";
amzn_assoc_default_search_phrase = "gfuel";
amzn_assoc_default_category = "All";
amzn_assoc_linkid = "ca1ce2facbf838f707b43529d1733997";
</script>
<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>`
        ]

        let rando = parseInt(Math.random() * ads.length, 10);

        postscribe('#' + scribeId, ads[rando]);
    }
    render() {
        const { classes } = this.props;

        return (
            <div id={scribeId} className={classes.adWrapper}></div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AdScriptSearches);