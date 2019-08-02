import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({

})


class MapToggleButton extends React.Component {
    render() {
        return (
            <Button color="primary" onClick={this.props.onClick} className={classNames(this.props.classNames)}>
                {this.props.children}
            </Button>
        );
    }
}

MapToggleButton.propTypes = {
    onClick: PropTypes.func,
    classNames: PropTypes.array
}

export default withStyles(styles, { withTheme: true })(MapToggleButton);



