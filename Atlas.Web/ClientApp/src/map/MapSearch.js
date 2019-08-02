import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

import React from 'react';

const styles = theme => ({
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        pointerEvents: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '4px',
        top: '4px',
        fontSize: '15px',
    },
    inputRoot: {
        color: 'inherit',
        width: '150px',
        height: '30px',
        backgroundColor: 'white',
        borderRadius: '5px'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        [theme.breakpoints.up('md')]: {
            width: 100,
        },
    },
    search: {
        position: 'absolute',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
        zIndex: '1000',
        height: '30px',
        borderRadius: '5px',
        top: '15px',
        left: '-8px'
    },
})

class MapSearch extends React.Component {
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase placeholder="Search..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MapSearch);



