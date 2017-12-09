import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Container extends Component {
    
    render() {
        const containerClass = classNames({
            'container': true,
            'has-image': this.props.hasImage
        });

        return (
            <div className={containerClass}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;