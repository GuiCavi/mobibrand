import React, { Component } from 'react';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
    Logo,
    Container,
    Button
} from '../components';

class OrdersScreen extends Component {
    constructor() {
        super();

        this.state = {
            themeChoosen: {
                name: '1',
                active: false,
                items: [
                    {theme: 'theme1', filename: 'card1.png', name: 'Cartão'},
                    {theme: 'theme1', filename: 'banner1.png', name: 'Banner'},
                    {theme: 'theme1', filename: 'faixa1.png', name: 'Faixa'},
                ]
            }
        }
    }

    render() {
        return (
            <Container>
                {/* <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 999, backgroundColor: '#333', overflow: 'auto' }}>
                    <pre>
                        {
                            JSON.stringify(this.state, null, 2)
                        }
                    </pre>
                </div> */}
                <Logo fixed theme='dark'/>
                    
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '40px 0' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: 25 }}>Seu Pedido</div>
                        </div>
                    </div>

                    <div style={{ flex: 1, alignSelf: 'stretch', padding: '40px 0 10px' }}>
                        <table style={{ width: '100%', height: '100%', overflow: 'auto', borderCollapse: 'collapse' }}>
                            <thead style={{ fontSize: 14 }}>
                                <tr>
                                    <th style={{ borderBottom: '1px solid #333', width: 120 }}>Produto</th>
                                    <th style={{ borderBottom: '1px solid #333' }}>Descrição</th>
                                    <th style={{ borderBottom: '1px solid #333' }}>Quantidade</th>
                                    <th style={{ borderBottom: '1px solid #333' }}>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.themeChoosen.items.map((item) => {
                                        return (
                                            <tr>
                                                <td style={{ padding: '0 5px', textAlign: 'center' }}>
                                                    <img src={require(`../assets/img/themes/${item.theme}/${item.filename}`)} style={{ width: 100, border: '1px solid #95989a', marginTop: 10, display: 'inline-block' }} />
                                                </td>
                                                <td style={{ padding: '0 5px', textAlign: 'center' }}>
                                                    {item.name}
                                                </td>
                                                <td style={{ padding: '0 5px', textAlign: 'center' }}>
                                                    <input type="number" />
                                                </td>

                                                <td style={{ padding: '0 5px', textAlign: 'center' }}>
                                                    R$ 0.00
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                                <tr style={{ borderTop: '1px solid #333' }}>
                                    <td colSpan={3} style={{ textAlign: 'right' }}></td>
                                    <td style={{ textAlign: 'center' }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ededed', borderRadius: 4, padding: '0 10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 8 }}>
                            <span style={{ fontSize: 12, color: '#999', marginBottom: 20 }}>Tempo de espera (dias)</span>
                            <input type="range" style={{ width: '95%' }}/>
                        </div>

                        <div style={{ flex: 1 }}>
                            10 dias
                        </div>

                        <div style={{ flex: 1 }}>
                            Total R$ 0.00
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
                        />
                    </div>
                </div>
                
            </Container>
        );
    }
}

export default OrdersScreen;