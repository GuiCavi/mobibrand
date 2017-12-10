import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    ThemeList
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
            <div className={stepClass} style={{ overflow: 'auto' }}>
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

                <div style={{ display: 'flex', flex: 1, alignSelf: 'stretch' }}>
                    <ThemeList
                        themes={this.props.themeList}
                        selectTheme={this.props.selectTheme}
                    />
                </div>

                <div style={{ flex: 0 }}>
                    <Button
                        text='Anterior'
                        secondary
                        onClick={() => {
                            this.props.setStep(3)
                        }}
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