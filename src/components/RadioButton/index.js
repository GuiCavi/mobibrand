import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class RadioButton extends Component {
    render() {
        const radioClass = classNames({
            'radio-button': true,
            'active': this.props.active
        });

        return (
            <div className={radioClass}></div>
        );
    }
}

export default RadioButton;