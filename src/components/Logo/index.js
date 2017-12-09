import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Logo extends Component {
    render() {
        const logoClass = classNames({
            'logo': true,
            'fixed': this.props.fixed,
            'dark': this.props.theme == 'dark'
        })

        return (
            <h1 className={logoClass}>MobiBrand</h1>
        );
    }
}

export default Logo