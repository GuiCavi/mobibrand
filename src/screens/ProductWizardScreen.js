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
            brandFile: '',
            themesList: [
                {
                    name: '1',
                    active: false,
                    items: [
                        {theme: 'theme1', filename: 'card1.png', name: 'Cartão'},
                        {theme: 'theme1', filename: 'banner1.png', name: 'Banner'},
                        {theme: 'theme1', filename: 'faixa1.png', name: 'Faixa'},
                    ]
                },
                {
                    name: '2',
                    active: false,
                    items: [
                        {theme: 'theme2', filename: 'card2.png', name: 'Cartão'},
                        {theme: 'theme2', filename: 'banner2.png', name: 'Banner'},
                        {theme: 'theme2', filename: 'faixa2.png', name: 'Faixa'},
                    ]
                },
                {
                    name: '3',
                    active: false,
                    items: [
                        {theme: 'theme3', filename: 'card3.png', name: 'Cartão'},
                        {theme: 'theme3', filename: 'banner3.png', name: 'Banner'},
                        {theme: 'theme3', filename: 'faixa3.png', name: 'Faixa'},
                    ]
                }
            ]
        };

        this._selectTemplate = this._selectTemplate.bind(this);
        this._selectColor = this._selectColor.bind(this);
        this._selectFile = this._selectFile.bind(this);
        this._selectTheme = this._selectTheme.bind(this);
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

    _selectTheme(name) {
        console.log(name);
        const temp = this.state.themesList.map((theme) => {
            if (theme.active) {
                return {
                    ...theme,
                    active: false
                }
            }
            if (theme.name == name) {
                return {
                    ...theme,
                    active: !theme.active
                }
            }

            return theme;
        });

        this.setState({
            themesList: temp
        })
    }

    render() {
        console.log(this.state);
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
                    
                <Steper steps={Steps} toSendToSteps={{
                    selectableTemplates: this.state.selectableTemplates,
                    themeList: this.state.themesList,

                    selectTemplate: this._selectTemplate,
                    selectColor: this._selectColor,
                    selectFile: this._selectFile,
                    selectTheme: this._selectTheme
                }} />
                
            </Container>
        );
    }
}

export default ProductWizardScreen;