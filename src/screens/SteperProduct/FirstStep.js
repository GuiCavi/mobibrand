import React, { Component } from 'react'

import classNames from 'classnames';

import {
    SteperBullets,
    SelectableTemplates,
    Button
} from '../../components';


import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});

class FirstStep extends Component {

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        // const {dispatch} = this.props;

        // dispatch(actionCreators.name(this.refs.inputName.value));
        this.props.setStep(1)
    }

    render() {
        const stepClass = classNames({
            'step': true,
            'active': this.props.active
        });

        let bullets = [];
        for (let i = 0; i < this.props.bulletCount; i++) {
            bullets.push(<SteperBullets key={i} active={this.props.index == i} />);
        }

        let selectableTemplates = this.props.selectableTemplates.map((selectableTemplate, index) => {
            return (
                <SelectableTemplates
                    key={index}
                    name={selectableTemplate.name}
                    type={selectableTemplate.type}
                    size={selectableTemplate.size}
                    active={selectableTemplate.active}
                    selectTemplate={this.props.selectTemplate}
                />
            );
        });

        return (
            <div className={stepClass} style={{ backgroundColor: 'transparent' }}>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <div className='step-title'>Primeiro Passo</div>
                    </div>

                    <div className="step-bullets">
                        {bullets}
                    </div>

                    <div className="step-help-text">
                        Selecione qual(is) <b>produto(s)</b> deseja produzir
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignSelf: 'stretch', marginLeft: -40, marginRight: -40 }}>
                    {selectableTemplates}
                </div>

                <div>
                    <Button
                        text='Anterior'
                        secondary
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

export default withRouter(connect(mapStateToProps)(FirstStep));