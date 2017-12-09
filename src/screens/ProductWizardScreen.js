import React, { Component } from 'react';

import {
    Header,
    Container,
    Logo,
    Steper
} from '../components';

import Steps from './SteperProduct';

class ProductWizardScreen extends Component {
    constructor() {
        super();
        
        this.state = {
            selectableTemplates: [
                { name: 'Cartão', type: 'card', size: '9 x 5 cm', active: false},
                { name: 'Banner', type: 'banner', size: '70 x 150 cm', active: false},
                { name: 'Faixa', type: 'stripe', size: '200 x 70 cm', active: false},
                { name: 'Placas', type: 'board', size: '60 x 80 cm', active: false},
            ]
        };

        this._selectTemplate = this._selectTemplate.bind(this);
    }

    _selectTemplate(type) {
        const temp = this.state.selectableTemplates.map((template) => {
            if (template.type == type) {
                return {
                    ...template,
                    active: !template.active
                }
            }

            return template;
        });

        this.setState({
            selectableTemplates: temp
        })
    }

    render() {
        return (
            <Container>
                <Logo fixed theme='dark'/>
                    
                <Steper steps={Steps} toSendToSteps={{
                    selectableTemplates: this.state.selectableTemplates,

                    selectTemplate: this._selectTemplate
                }} />
                
            </Container>
        );
    }
}

export default ProductWizardScreen;