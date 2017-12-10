import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    Input
} from '../../components';

class SecondStep extends Component {
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
                    <Input placeholder="Nome da imobiliária" />
                    <Input placeholder="Telefone" />
                    <Input placeholder="Site da imobiliária" />
                    <Input placeholder="CRECI" />                    
                </div>

                <div>
                    <Button
                        text='Anterior'
                        secondary
                        onClick={() => {
                            this.props.setStep(1)
                        }}
                    />

                    <Button
                        text='Próximo'
                        isCta
                        onClick={() => {
                            this.props.setStep(2)
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SecondStep;