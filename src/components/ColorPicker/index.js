import React, { Component } from 'react';

import { ChromePicker } from 'react-color';

import classNames from 'classnames';

import styles from './styles.css';

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            color: props.defaultColor || '#fff',
        };

        this._handleClick = this._handleClick.bind(this);
        this._handleClose = this._handleClose.bind(this);
        this._handleChangeColor = this._handleChangeColor.bind(this);
    }

    _handleClick = (e) => {
        console.log('toggle');
        this.setState({ isOpen: !this.state.isOpen })
    };

    _handleClose = (e) => {
        console.log('close');
        this.setState({ isOpen: false })
    };

    _handleChangeColor(color) {
        if (this.props.handleChangeColor) {
            this.props.handleChangeColor(color);
        }

        this.setState({
            color
        });
    }

    render() {
        const wrapperClass = classNames({
            'colorpicker-wrapper': true
        });

        const colorpickerClass = classNames({
            'colorpicker': true
        });

        const colorClass = classNames({
            'colorpicker-color': true
        });

        return (
            <div>
                {
                    this.state.isOpen &&
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }} onClick={this._handleClose} />
                }
                {
                    this.state.isOpen &&
                    <div style={{ position: 'absolute', transform: 'translateY(-105%)', zIndex: 2 }}>
                        <ChromePicker
                            color={this.state.color}
                            onChangeComplete={this._handleChangeColor}
                        />
                    </div>
                }
                <div className={wrapperClass} onClick={this._handleClick}>
                    <div className={colorpickerClass}>
                        <span className={colorClass} style={{ backgroundColor: this.state.color}} />
                    </div>
                    <span style={{ marginTop: 5, fontSize: 14, display: 'inline-block' }}>{this.props.name || 'Color'}</span>
                </div>
            </div>
        );
    }
}

export default ColorPicker;