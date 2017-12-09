import React, { Component } from 'react';

import {
    Button,
    InputWithText
} from '../../components';

import styles from './styles.css';

class Slogan extends Component {
    render() {
        return (
            <div className="slogan">
                <p className="lead">Criar a identidade visual da sua imobiliária</p>
                <p className="lead">nunca foi tão fácil!</p>
                
                <InputWithText />
            </div>
        );
    }
}

export default Slogan;
