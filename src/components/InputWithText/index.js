import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class InputWithText extends Component {
    render() {
        const btnClass = classNames({
            'input-with-text-button': true
        });
        
        const inputClass = classNames({
            'input-with-text-input': true
        })

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70%', marginTop: 40 }}>
                <input className={inputClass} placeholder="Digite o nome da imobiliária para começar..." />
                <button className={btnClass}>Começar agora</button>
            </div>
        );
    }
}

export default InputWithText;