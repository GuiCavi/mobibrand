import React, { Component } from 'react';

import {
    Button,
    Logo
} from '../../components';

import styles from './styles.css';

class Header extends Component {
    render() {
        return (
            <header className="header-main">
                <Logo />
                <ul className="nav">
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="/login">Cadastre-se</a></li>
                    <Button
                        text='Cadastre-se'
                        outline
                    />
                </ul>
            </header>
        );
    }
}

export default Header;