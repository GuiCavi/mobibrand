import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Input extends Component {
    render() {
        const wrapperClass = classNames({
            'input-wrapper': true
        })

        const inputClass = classNames({
            'input': true
        })

        return (
            <div className={wrapperClass}>
                <input type={this.props.type || 'text'} className={inputClass} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default Input;