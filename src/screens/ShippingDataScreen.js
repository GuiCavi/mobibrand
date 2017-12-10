import React, { Component } from 'react';

import {
    Button,
    Container,
    Logo,
    Input
} from '../components';

class ShippingDataScreen extends Component {
    render() {
        return (
            <Container>
                <Logo theme='dark' fixed />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', width: '70%' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Informações para envio</div>
                        </div>

                        <div style={{ color: '#95989a', marginBottom: '20px' }}>
                            Forneça os <b>dados</b> da sua empresa imobiliária
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>
                            <Input placeholder="Endereço" loginWrapper />
                            <Input placeholder="CEP" loginWrapper />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                              <Input placeholder="Número" shippingWrapper />             
                              <Input placeholder="Complemento" shippingWrapper />         
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
                                    this.props.history.push("/conclusion");
                                }}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        );
    }
}

export default ShippingDataScreen;