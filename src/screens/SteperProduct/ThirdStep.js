import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    Input,
    ColorPicker
} from '../../components';

class ThirdStep extends Component {
    render() {
        const stepClass = classNames({
            'step': true,
            'active': this.props.active
        });

        let bullets = [];
        for (let i = 0; i < this.props.bulletCount; i++) {  
            bullets.push(<SteperBullets key={i} active={this.props.index == i} />);
        }

        return (
            <div className={stepClass} style={{ backgroundColor: 'transparent' }}>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <div className='step-title'>Segundo Passo</div>
                    </div>

                    <div className="step-bullets">
                        {bullets}
                    </div>

                    <div className="step-help-text">
                        Forneça os <b>dados</b> da sua empresa imobiliária
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', flex: 1, alignSelf: 'stretch' }}>
                    <div>
                        <input type='file' id="brand-logo" onChange={(e) => this.props.selectFile(e.target.files[0])} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ColorPicker name="Cor primária" handleChangeColor={(color) => this.props.selectColor(color, true)} />

                        <ColorPicker name="Cor secundária" handleChangeColor={(color) => this.props.selectColor(color, false)} />
                    </div>
                </div>

                <div>
                    <Button
                        text='Anterior'
                        secondary
                    />

                    <Button
                        text='Próximo'
                        isCta
                    />
                </div>
            </div>
        );
    }
}

export default ThirdStep;