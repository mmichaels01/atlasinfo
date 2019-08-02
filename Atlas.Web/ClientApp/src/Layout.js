import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 250;
const toolbarHeight = 48;
export const textPageStyle = {
    padding: '10px 0 0 10px',
}
export const contentHeight = 'calc(100vh - ' + (toolbarHeight) + 'px) ';

const styles = theme => ({
    menuButton: {
        marginLeft: 6,
        marginRight: theme.spacing.unit,
        textAlign: 'center'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: '48px',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: toolbarHeight + 'px',
        width: '100%',
        position: 'relative',
    },
    content: {
        height: contentHeight,
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
    },
    grow: {
        flexGrow: '1'
    },
    appBarIcon: {
        fontSize: '24px',
        color: 'white',
        marginRight: '16px'
    }
});

class Layout extends React.Component {
    state = {
        open: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({ open: open });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <div className={classes.contentContainer}>
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
                </div>
            </div >
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);