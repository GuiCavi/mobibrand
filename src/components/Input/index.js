import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Input extends Component {
    render() {
        const wrapperClass = classNames({
            'input-wrapper': true,
            'input-login-wrapper': this.props.loginWrapper,
            'input-shipping-wrapper': this.props.shippingWrapper
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