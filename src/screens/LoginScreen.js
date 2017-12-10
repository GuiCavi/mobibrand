import React, { Component } from 'react';

import {
    Button,
    Container,
    Logo,
    Input
} from '../components';

class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <div style={{ textAlign: 'center', height: '100px', display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Logo theme='dark' />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ width: '100%', padding:'5% 10%' }}>
                      <div style={{ textAlign: 'center' }}>
                          <div>
                              <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Login</div>
                          </div>

                          <div style={{ color: '#95989a', marginBottom: '20px' }}>
                              Já possui conta? Entre
                          </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>
                          <Input placeholder="Email" loginWrapper />
                          <Input placeholder="Senha" loginWrapper />               
                      </div>

                      <p style={{ color: '#90de9f', textAlign: 'center', margin: '30px 0px 26px 0px'}}>Esqueceu a senha?</p>
                      <hr style={{ border: '1px solid #ccc'}} />  
                      <Button
                          text='Entrar'
                          isCta
                          loginButton
                          onClick={() => {
                              //this.props.setStep(5)
                              this.props.history.push("/payment");
                          }}
                      /> 
                  </div>

                  <div style={{width:'2px', background:'#ccc', height: '60%'}}>&nbsp;</div>

                  <div style={{ width: '100%', padding:'5% 10%' }}>
                      <div style={{ textAlign: 'center' }}>
                          <div>
                              <div style={{ fontWeight: 'bold', fontSize: '25px' }}>Registre-se</div>
                          </div>

                          <div style={{ color: '#95989a', marginBottom: '20px' }}>
                              Não possui uma conta? Cadastre-se!
                          </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>
                          <Input placeholder="Email" loginWrapper />
                          <Input placeholder="Senha" loginWrapper />
                          <Input placeholder="Confirmação de Senha" loginWrapper />             
                      </div>
                      <hr style={{ border: '1px solid #ccc', margin: '20px 0'}} />  
                      <Button
                          text='Registrar'
                          isCta
                          loginButton
                          onClick={() => {
                              //this.props.setStep(5)
                              this.props.history.push("/payment");
                          }}
                      /> 
                  </div>
                </div>
            </Container>
        );
    }
}

export default LoginScreen;