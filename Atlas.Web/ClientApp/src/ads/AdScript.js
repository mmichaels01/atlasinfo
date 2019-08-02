import React from 'react';
import postscribe from 'postscribe';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    adWrapper: {
    }
});

const scribeId = 'amazon-ad'

class AdScript extends React.Component {
    componentDidMount() {
        let code = `<div id="amzn-assoc-ad-bf2c31a9-6939-497e-bc5e-2149db3c7972"></div><script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=bf2c31a9-6939-497e-bc5e-2149db3c7972"></script>`;
        postscribe('#' + scribeId, code);
    }
    render() {
        const { classes } = this.props;

        return (
            <div id={scribeId} className={classes.adWrapper}></div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(AdScript);