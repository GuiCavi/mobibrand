import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Button extends Component {
    render() {
        const btnClass = classNames({
            'button': true,
            'button-success': this.props.type == 'success',
            'button-cta': this.props.isCta,
            'button-outline': this.props.outline
        });

        return (
            <div className={btnClass}>
                {this.props.text || 'Button'}
            </div>
        );
    }
}

export default Button;