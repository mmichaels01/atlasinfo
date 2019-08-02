import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import postscribe from 'postscribe';
import classNames from 'classnames';
import AtlasAppBar from '../common/AtlasAppBar';

import { textPageStyle } from '../Layout';
import { withStyles } from '@material-ui/core/styles';

let jsDiv = 'trello-embed'

const styles = theme => ({
    trello: {
        display: 'flex',
    },
    trelloBoard: {
        margin: 0,
        padding: '10px 20px 10px 0'
    }
});


class DevelopmentView extends React.Component {
    handleTrelloLoad = () => {
        window.TrelloBoards.load(document, { compact: false, allAnchors: true });
    }

    componentDidMount() {
        let code = '<script src="https://p.trellocdn.com/embed.min.js"></script>';
        postscribe('#' + jsDiv, code, {
            afterAsync: this.handleTrelloLoad
        });
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AtlasAppBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Development
                    </Typography>
                </AtlasAppBar>
                <Grid container spacing={8} style={textPageStyle}>
                    <Grid item xs={false} sm={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>Development</Typography>
                        <Divider />
                        <div id={jsDiv} className={classes.trello}>
                            <blockquote className={classNames('trello-board-compact', classes.trelloBoard)}>
                                <a href="https://trello.com/b/ABAwzCkk/road-map">Trello Road Map</a>
                            </blockquote>
                            <blockquote className={classNames('trello-board-compact', classes.trelloBoard)}>
                                <a href="https://trello.com/b/UnkDYodH/bug-reports">Trello Bug Reporter</a>
                            </blockquote>
                        </div>
                        <Typography variant="body2" gutterBottom>Development roadmap and bug tracking can be viewed from the Trello boards</Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DevelopmentView);
