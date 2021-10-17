import React, { Component } from "react";
import PropTypes from 'prop-types';

class Loading extends Component {
    
    render() {
        return (<div className="loader">{this.props.message}</div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired
};

export default Loading;