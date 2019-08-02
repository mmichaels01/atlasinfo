import { CircularProgress } from "@material-ui/core";
import React from 'react';
import Fab from '@material-ui/core/Fab';

class AnimatedButton extends React.PureComponent {
    render() {
        if (this.props.animate)
            return (
                <Fab className={this.props.className} color={this.props.color} size={this.props.size} onClick={this.props.onClick} >
                    <CircularProgress color={this.props.spinnerColor} thickness={10} />
                </Fab>
            )
        else
            return (
                <Fab className={this.props.className} color={this.props.color} size={this.props.size} onClick={this.props.onClick} >
                    {this.props.children}
                </Fab>
            )

    }
}

export default AnimatedButton;