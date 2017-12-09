import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class ColorPicker extends Component {

    render() {
        const wrapperClass = classNames({
            'colorpicker-wrapper': true
        });

        const colorpickerClass = classNames({
            'colorpicker-wrapper': true
        });

        return (
            <div style={wrapperClass}>
                <div style={colorpickerClass}>
                    <span style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'red', display: 'block' }} ></span>                            
                </div>
                <span style={{ marginTop: 5, fontSize: 14, display: 'inline-block' }}>Cor 1</span>
            </div>
        );
    }
}

export default ColorPicker;