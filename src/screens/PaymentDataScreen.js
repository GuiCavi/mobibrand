import React, { Component } from 'react';

import {
    Button,
    Container,
    Logo,
    Input,
    RadioButton
} from '../components';

class PaymentDataScreen extends Component {
    render() {
        return (
            <Container>
                <Logo theme='dark' fixed />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', width: '70%' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Pagamento</div>
                            <div style={{ color: '#95989a', marginBottom: '20px' }}>Forneça seus <b>dados</b> para realizar o pagamento</div>
                        </div>

                        <div style={{ borderBottom: '1px solid #95989a', padding: '10px 0' }}>
                            <div style={{ textAlign: 'left', marginBottom: 10 }}>Métodos de pagamento</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', transform: 'scale(0.7)' }}>
                                    <RadioButton active={true}/>
                                    <div style={{ padding: '0 10px' }}>Cartão de crédito</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', transform: 'scale(0.7)' }}>
                                    <RadioButton active={false}/>
                                    <div style={{ padding: '0 10px' }}>Boleto</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', transform: 'scale(0.7)' }}>
                                    <RadioButton active={false}/>
                                    <div style={{ padding: '0 10px' }}>Depósito</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>
                            <img src={require('../assets/img/cartoes.png')} style={{ width: '45%' }} />
                            <Input placeholder="Nome" loginWrapper />
                            <Input placeholder="Número do cartão" loginWrapper />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                              <Input placeholder="Data de validade" shippingWrapper />             
                              <Input placeholder="CVC" shippingWrapper />         
                            </div>    
                        </div>

                        <div>
                            <Button
                                text='Anterior'
                                secondary
                            />

                            <Button
                                text='Próximo'
                                isCta
                                onClick={() => {
                                    //this.props.setStep(5)
                                    this.props.history.push("/status");
                                }}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        );
    }
}

export default PaymentDataScreen;