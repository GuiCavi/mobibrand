import React, { Component } from 'react';

import {
    Button,
    Container,
    Logo
} from '../components';

class OrderStatusScreen extends Component {
    render() {
        return (
            <Container>
              <Logo theme='dark' fixed />
              <div style={{ textAlign: 'center', height: '100vh', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Acompanhamento do pedido</div>
                </div>
                <div style={{ color: '#95989a', marginBottom: '20px' }}>
                    Veja a situação da sua encomenda!
                </div>
                <img src={require(`../assets/img/encomenda.png`)} style={{ maxWidth: '60%', margin: '40px 0' }} />
                <div>
                    <Button
                        text='Anterior'
                        secondary
                    />

                    <Button
                        text='Histórico de pedidos'
                        isCta
                        onClick={() => {
                            //this.props.setStep(5)
                            this.props.history.push("/shipping");
                        }}
                    />
                </div>
              </div>
            </Container>
        );
    }
}

export default OrderStatusScreen;