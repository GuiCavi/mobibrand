import React, { Component } from 'react';

import {
    Header,
    Container,
    Slogan
} from '../components';

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header />

                <Slogan />

                <div className="footer">
                    <p>MobiBrand - Um produto Mobit. Copyright &copy; 2017</p>
                </div>
            </Container>
        );
    }
}

export default HomeScreen;