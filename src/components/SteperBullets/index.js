import React, { Component } from 'react'

import classNames from 'classnames';

import styles from './styles.css';

class SteperBullets extends Component {
    render() {
        const bulletClass = classNames({
            'step-bullet': true,
            'active': this.props.active
        })

        return (
            <div className={bulletClass}>
            </div>
        );
    }
}

export default SteperBullets;