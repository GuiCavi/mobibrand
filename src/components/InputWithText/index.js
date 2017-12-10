import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});


class InputWithText extends Component {

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        const {dispatch} = this.props;

        // console.log("set = ",e);
        // console.log("set = ",this.refs.inputName.value);
        dispatch(actionCreators.name(this.refs.inputName.value));
        this.props.history.push("/product/register");
    }

    render() {
        const btnClass = classNames({
            'input-with-text-button': true
        });
        
        const inputClass = classNames({
            'input-with-text-input': true
        });

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70%', marginTop: 40 }}>
                <input className={inputClass} ref="inputName" placeholder="Digite o nome da imobiliária para começar..." />
                <button className={btnClass} onClick={this.onClick}>Começar agora</button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(InputWithText));