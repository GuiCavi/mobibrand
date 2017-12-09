import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button
} from '../../components';

class FourthStep extends Component {
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

                <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignSelf: 'stretch', marginLeft: -40, marginRight: -40 }}>
                    
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

export default FourthStep;