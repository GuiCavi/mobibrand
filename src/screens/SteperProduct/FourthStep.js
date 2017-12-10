import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    ThemeList
} from '../../components';


import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});

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
                        <div className='step-title'>Quarto Passo</div>
                    </div>

                    <div className="step-bullets">
                        {bullets}
                    </div>

                    <div className="step-help-text">
                        Selecione um <b>modelo</b>
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
                            this.props.setStep(2)
                        }}
                    />

                    <Button
                        text='Próximo'
                        isCta
                        onClick={() => {
                            this.props.setStep(4)
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default FourthStep;