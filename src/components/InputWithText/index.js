import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class InputWithText extends Component {
    render() {
        const btnClass = classNames({
            
        });

        const inputClass = classNames({
            
        })

        return (
            <div className={btnClass}>
                <input className={inputClass} />
                <button className={btnClass}>UHDAUHSDUAs</button>
            </div>
        );
    }
}

export default InputWithText;