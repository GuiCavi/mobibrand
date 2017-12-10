import React, { Component } from 'react';

import {
    Button,
    Container,
    Logo
} from '../components';

class ConclusionScreen extends Component {
    render() {
        return (
            <Container>
              <Logo theme='dark' fixed />
              <div style={{ textAlign: 'center', height: '100vh', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Compra Concluída!</div>
                </div>
                <img src={require(`../assets/img/confirmacao.png`)} style={{ maxWidth: '60%', margin: '40px 0' }} />
                <div>
                    <Button
                        text='Acompanhar meu pedido'
                        secondary
                    />

                    <Button
                        text='Histórico de pedidos'
                        isCta
                    />
                </div>
              </div>
            </Container>
        );
    }
}

export default ConclusionScreen;