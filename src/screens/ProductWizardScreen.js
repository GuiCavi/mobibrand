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
            ],
            primaryColor: '',
            secondaryColor: '',
            brandFile: ''
        };

        this._selectTemplate = this._selectTemplate.bind(this);
        this._selectColor = this._selectColor.bind(this);
        this._selectFile = this._selectFile.bind(this);
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

    _selectColor(color, isPrimary) {
        if (isPrimary) {
            this.setState({
                primaryColor: color.hex
            });
        }
        else {
            this.setState({
                secondaryColor: color.hex
            });
        }
    }

    _selectFile(file) {
        this.setState({
            brandFile: file
        })
    }

    render() {
        console.log(this.state);
        return (
            <Container>
                <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 999, backgroundColor: '#333' }}>
                    <pre>
                        {
                            JSON.stringify(this.state, null, 2)
                        }
                    </pre>
                </div>
                <Logo fixed theme='dark'/>
                    
                <Steper steps={Steps} toSendToSteps={{
                    selectableTemplates: this.state.selectableTemplates,

                    selectTemplate: this._selectTemplate,
                    selectColor: this._selectColor,
                    selectFile: this._selectFile
                }} />
                
            </Container>
        );
    }
}

export default ProductWizardScreen;