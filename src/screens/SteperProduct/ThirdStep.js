import React, { Component } from 'react'

import { ChromePicker } from 'react-color';

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    Input
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
                    <Input type='file'/>

                    <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: 15, marginRight: 15 }}>
                            <div style={{ width: 46, height: 46, borderWidth: 1, borderColor: '#333', borderStyle: 'solid', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'red', display: 'block' }} ></span>                            
                            </div>
                            <span style={{ marginTop: 5, fontSize: 14, display: 'inline-block' }}>Cor 1</span>
                        </div>

                        <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: 15, marginRight: 15 }}>
                            <div style={{ width: 46, height: 46, borderWidth: 1, borderColor: '#333', borderStyle: 'solid', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'red', display: 'block' }} ></span>            
                            </div>
                            <span style={{ marginTop: 5, fontSize: 14, display: 'inline-block' }}>Cor 2</span>
                        </div>
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