import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    Input,
    ColorPicker
} from '../../components';


import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});

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
                        <div className='step-title'>Terceiro Passo</div>
                    </div>

                    <div className="step-bullets">
                        {bullets}
                    </div>

                    <div className="step-help-text">
                        Forneça o <b>logo</b> e as <b>cores</b> da imobiliária
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', flex: 1, alignSelf: 'stretch' }}>
                    <div style={{textAlign: 'center'}}>
                        <div>
                            <img src="/images/logo.png"/>
                        </div>
                        <input type='file' id="brand-logo" onChange={(e) => this.props.selectFile(e.target.files[0])} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ColorPicker name="Cor primária" defaultColor={"#333f48"} handleChangeColor={(color) => this.props.selectColor(color, true)} />

                        <ColorPicker name="Cor secundária" defaultColor={"#00b1a5"} handleChangeColor={(color) => this.props.selectColor(color, false)} />
                    </div>
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
                            this.props.setStep(3)
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ThirdStep;