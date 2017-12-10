import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    Button,
    Input
} from '../../components';


import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

import stylesInput from '../../components/Input/styles.css';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});

class SecondStep extends Component {

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        const {dispatch} = this.props;

        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let site = this.refs.site.value;
        let creci = this.refs.creci.value;

        // if(!email || !phone || !site || !creci){
        if(false){
            alert("Preencha os dados");
        }else{
            dispatch(actionCreators.step2(email, phone, site, creci));
            this.props.setStep(2);
        }

        // dispatch(actionCreators.name(this.refs.inputName.value));
    }

    render() {
        const stepClass = classNames({
            'step': true,
            'active': this.props.active
        });

        const wrapperClass = classNames({
            'input-wrapper': true,
            'input-login-wrapper': this.props.loginWrapper,
            'input-shipping-wrapper': this.props.shippingWrapper
        });

        const inputClass = classNames({
            'input': true
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
                    <div className={wrapperClass}>
                        <label style={{display: 'block', marginBottom: '10px'}}>Email</label>
                        <input ref="email" defaultValue={"imob@prudente.com"} type={this.props.type || 'text'} className={inputClass} placeholder={"Email"} />
                    </div>
                    <div className={wrapperClass}>
                        <label style={{display: 'block', marginBottom: '10px'}}>Telefone</label>
                        <input ref="phone" defaultValue={"(18) 9181-8181"} type={this.props.type || 'text'} className={inputClass} placeholder={"Telefone"} />
                    </div>
                    <div className={wrapperClass}>
                        <label style={{display: 'block', marginBottom: '10px'}}>Site</label>
                        <input ref="site" defaultValue={"imob.com"} type={this.props.type || 'text'} className={inputClass} placeholder={"Site"} />
                    </div>
                    <div className={wrapperClass}>
                        <label style={{display: 'block', marginBottom: '10px'}}>Número CRECI</label>
                        <input ref="creci" defaultValue={"51.765-F"} type={this.props.type || 'text'} className={inputClass} placeholder={"CRECI"} />
                    </div>
                </div>

                <div>
                    <Button
                        text='Anterior'
                        secondary
                        onClick={() => {
                            this.props.setStep(0);
                        }}
                    />

                    <Button
                        text='Próximo'
                        isCta
                        onClick={this.onClick}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(SecondStep));