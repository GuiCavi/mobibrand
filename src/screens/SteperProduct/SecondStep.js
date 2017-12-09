import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets
} from '../../components';

class FirstStep extends Component {
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
                    <div style={{ marginBottom: 30 }}>
                        <div className='step-title'>Segundo Passo</div>
                        <div className='step-subtitle'>Vamos lá!</div>
                    </div>

                    <div className="step-bullets">
                        {bullets}
                    </div>
                </div>


                <div>
                    Content
                </div>

                <div>
                    Buttons
                </div>
            </div>
        );
    }
}

export default FirstStep;