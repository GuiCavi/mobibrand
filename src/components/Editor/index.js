import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';  //do not remove

import {fabric} from 'fabric';

import models from '../../assets/models/all.js'

import FormatTextIcon from 'mdi-react/FormatTextIcon';
import FileImageIcon from 'mdi-react/FileImageIcon';
import VectorRectangleIcon from 'mdi-react/VectorRectangleIcon';
import VectorCircleIcon from 'mdi-react/VectorCircleIcon';
import QrcodeIcon from 'mdi-react/QrcodeIcon';
// import CloseCircleIcon from 'mdi-react/CloseCircleIcon';

class Editor extends Component {

    constructor(props){
        super(props);


        //COMO USAR?????????????????????????????????
        //------------------------------------------------------------------------------------------------------------------------------------------------------------------
        //<Editor useModel={true} type={"banner"} boardType={"sell"} phone={"(19) 4132-1232"} name={"Imobiliaria"} email={"imob@teste.com"} creci={"413.21"}

        //PARAMETROS DE PROPS
        //type (board, banner, ribbon, card)
        //boardType (quando for placa, 'rent' ou 'sell')

        //SE FOR USAR UM MODELO JÁ PRONTO
        //useModel (usar algum modelo padrão ou não)
        //name (nome da empresa)
        //phone (telefone da empresa)
        //creci
        //email
        //site
        //image
        //--------------------------------------------------------------------------------------------------------------------------------------------------------------




        this.sizes = {
            // "board": {
            //     "square": {width: 300, height: 300},
            //     "rect": {width: 400, height: 300}
            // },
            "board": {width: 550, height: 450},
            "banner": {width: 350, height: 500},
            "ribbon": {width: 600, height: 250}, //faixa
            "card": {width: 525, height: 300},
        };

        let canvasWidth;
        let canvasHeight;
        let productText;

        if(this.props.type === 'board'){
            canvasWidth = this.sizes.board.width;
            canvasHeight = this.sizes.board.height;
            productText = "Placa";
        }else if(this.props.type === 'banner'){
            canvasWidth = this.sizes.banner.width;
            canvasHeight = this.sizes.banner.height;
            productText = "Banner";
        }else if(this.props.type === 'ribbon'){
            canvasWidth = this.sizes.ribbon.width;
            canvasHeight = this.sizes.ribbon.height;
            productText = "Faixa";
        }else if(this.props.type === 'card'){
            canvasWidth = this.sizes.card.width;
            canvasHeight = this.sizes.card.height;
            productText = "Cartão";
        }else{
            canvasWidth = 400;
            canvasHeight = 300;
        }


        this.state = {
            canvasWidth: canvasWidth,
            canvasHeight: canvasHeight,
            showTextControls: false,
            showImageControls: false,
            showShapeControls: false,
            showQrCodeControls: false,
            productText: productText
        };

        this.canvas = null;

    }

    componentDidMount(){
        this.canvas = new window.fabric.Canvas('canvasEditor', {
            width: this.state.canvasWidth,
            height: this.state.canvasHeight
        });

        //load from json if user want a existent model
        if(this.props.useModel){
            let selected_json = models.boardrent;
            if(this.props.type === 'board'){
                if(this.props.boardType == 'rent'){
                    selected_json = models.boardrent;
                }else{
                    selected_json = models.boardsell;
                }
            }else if(this.props.type === 'banner'){
                selected_json = models.banner;
            }else if(this.props.type === 'ribbon'){
                selected_json = models.ribbon;
            }else if(this.props.type === 'card'){
                selected_json = models.card;
            }

            console.log(selected_json);

            for(let i = 0; i < selected_json.objects.length; i++){
                if(selected_json.objects[i].id == "phone"){
                    selected_json.objects[i].text = this.props.phone || '';
                }else if(selected_json.objects[i].id == "email"){
                    selected_json.objects[i].text = this.props.email || '';
                }else if(selected_json.objects[i].id == "creci"){
                    selected_json.objects[i].text = this.props.creci || '';
                }else if(selected_json.objects[i].id == "site"){
                    selected_json.objects[i].text = this.props.site || '';
                }else if(selected_json.objects[i].id == "image"){
                    //TODO;
                }
            }


            this.canvas.loadFromDatalessJSON(selected_json);

            // setTimeout(() => {
            //     let canvasObjects = this.canvas.getObjects();
            //     console.log(canvasObjects);
            //
            //     for(let i = 0; i < canvasObjects.length; i++){
            //         console.log(canvasObjects[i].id);
            //         if(canvasObjects[i].id == "empresa"){
            //             console.log("set empresa");
            //             canvasObjects[i].set('Text', this.props.name);
            //             canvasObjects[i].text = this.props.name;
            //             //canvasObjects[i].setText('Selectedoooooooo');
            //         }
            //     }
                this.canvas.renderAll();
            // }, 1000);

        }

        this.canvas.on('object:selected', (e) => {
            // console.log(this.canvas.getActiveObject());
            console.log(this.canvas.getActiveObject().get('type'));

            //reset
            this.setState({
                showTextControls: false,
                showImageControls: false,
                showShapeControls: false,
                showQrCodeControls: false
            });

            if (this.canvas.getActiveObject().get('type') === "textbox" || this.canvas.getActiveObject().get('type') === "text") {
                //this.refs.textControls.hidden = false;
                this.setState({
                    showTextControls: true
                });
            }else if (this.canvas.getActiveObject().get('type') === "image") {
                this.setState({
                    showImageControls: true
                });
            }else if (this.canvas.getActiveObject().get('type') === "rect" || this.canvas.getActiveObject().get('type') === "circle") {
                this.setState({
                    showShapeControls: true
                });
            }
        });
        this.canvas.on('before:selection:cleared', (e) => {
            this.setState({
                showTextControls: false,
                showImageControls: false,
                showShapeControls: false,
                showQrCodeControls: false
            });
        });

        this.canvas.on('selection:updated', (e) => {
            this.setState({
                showTextControls: false,
                showImageControls: false,
                showShapeControls: false,
                showQrCodeControls: false
            });

            if (this.canvas.getActiveObject().get('type') === "textbox" || this.canvas.getActiveObject().get('type') === "text") {
                //this.refs.textControls.hidden = false;
                this.setState({
                    showTextControls: true
                });
            }else if (this.canvas.getActiveObject().get('type') === "image") {
                this.setState({
                    showImageControls: true
                });
            }else if (this.canvas.getActiveObject().get('type') === "rect" || this.canvas.getActiveObject().get('type') === "circle") {
                this.setState({
                    showShapeControls: true
                });
            }
        });

        document.getElementById('file').addEventListener("change", (e) => {
            let file = e.target.files[0];
            let reader = new FileReader();

            reader.onload = (f) => {
                let data = f.target.result;
                fabric.Image.fromURL(data, (img) => {
                    let image = img.set({
                        top: (this.state.canvasHeight/2-20),
                        left: (this.state.canvasWidth/2-20),
                        angle: 0
                    })
                    .scaleToWidth(100)
                    .scaleToHeight(100);

                    this.canvas.add(image).renderAll();

                    let dataURL = this.canvas.toDataURL({
                        format: 'png',
                        quality: 1
                    });

                    //img.on('moving', () => { this.positionBtn(img) });
                    //img.on('scaling', () => { this.positionBtn(img) });
                });
            };

            reader.readAsDataURL(file);
        });

        document.getElementById('fileChange').addEventListener("change", (e) => {
            let file = e.target.files[0];
            let reader = new FileReader();

            reader.onload = (f) => {
                let data = f.target.result;
                fabric.Image.fromURL(data, (img) => {
                    let activeImage = this.canvas.getActiveObject();
                    console.log(activeImage);

                    let image = img.set({
                        left: activeImage.left,
                        top: activeImage.top,
                        angle: 0
                    })
                    .scaleToWidth(100)
                    .scaleToHeight(100);

                    this.canvas.remove(activeImage);
                    this.canvas.add(image).renderAll();

                    let dataURL = this.canvas.toDataURL({
                        format: 'png',
                        quality: 1
                    });

                });
            };

            reader.readAsDataURL(file);
        });

        //-------------------------------
        // Keyboard events
        //-------------------------------
        document.body.addEventListener("keydown", (e) => {
            //console.log(e);
            e = e || window.event;
            let key = e.which || e.keyCode; // keyCode detection
            let ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
            let cmd = e.metaKey ? e.metaKey : ((key === 91) ? true : false); // cmd detection
            if ( key == 86 && (ctrl || cmd) ) {
                console.log("Ctrl + V Pressed !");
                this.paste();
            } else if ( key == 67 &&  (ctrl || cmd) ) {
                console.log("Ctrl + C Pressed !");
                this.copy();

                // Delete or backspace
            } else if ( key == 43 || key == 8 ) {
                console.log("Delete or backspace Pressed !");
                this.deleteObject();
            }
        }, false);

    }

    deleteObject () {
        let activeGroup = this.canvas.getActiveObjects();
        if (activeGroup.length > 1) {
            for(let i = 0; i < activeGroup.length; i++){
                this.canvas.remove(activeGroup[i]);
            }
            this.canvas.discardActiveObject();
        } else{
            if (this.canvas.getActiveObject() != null){
                this.canvas.remove(this.canvas.getActiveObject());
            }
        }

        this.canvas.renderAll();
    }

    copy() {
        this.canvas.getActiveObject().clone((cloned) => {
            this._clipboard = cloned;
        });
    }

    paste() {
        this._clipboard.clone((clonedObj) => {
            this.canvas.discardActiveObject();

            clonedObj.set({
                left: clonedObj.left + 10,
                top: clonedObj.top + 10,
                evented: true,
            });

            if (clonedObj.type === 'activeSelection') {
                // active selection needs a reference to the canvas.
                clonedObj.canvas = this.canvas;
                clonedObj.forEachObject(function(obj) {
                    this.canvas.add(obj);
                });
                clonedObj.setCoords(); // this should solve the unselectability
            } else {
                this.canvas.add(clonedObj);
            }
            this._clipboard.top += 10;
            this._clipboard.left += 10;
            this.canvas.setActiveObject(clonedObj);
        });
    }

    addComponentToCanvas(type){
        switch (type){
            case 'text':
                let text = new fabric.Textbox('Texto', {top: (this.state.canvasHeight/2-20), left: (this.state.canvasWidth/2-20), width: 80, fontSize: 20 });
                this.canvas.add(text);
                break;

            case 'image':
                this.refs.fileUploader.click();
                break;

            case 'rect':
                let rect = new fabric.Rect({top: (this.state.canvasHeight/2-20), left: (this.state.canvasWidth/2-20), width: 55, height: 40, fill: '#484848' });
                this.canvas.add(rect);
                break;

            case 'circle':
                let circle = new fabric.Circle({top: (this.state.canvasHeight/2-20), left: (this.state.canvasWidth/2-20), radius: 20, fill: '#484848' });
                this.canvas.add(circle);
                break;

            case 'qrcode':
                fabric.Image.fromURL('/images/qrcode.svg', (img) => {
                    this.canvas.add(img.set({ top: (this.state.canvasHeight/2-20), left: (this.state.canvasWidth/2-20), angle: 0 }).scale(0.2));
                });
                break;

            default:
                break;
        }
    }

    renderComponents(){
        return(
            <div className="components-wrapper">
                <button className="button-component" onClick={() => {this.addComponentToCanvas('text')}}>
                    <FormatTextIcon className="component-icon" />
                    {/*Texto*/}
                </button>
                <button className="button-component" onClick={() => {this.addComponentToCanvas('image')}}>
                    <FileImageIcon className="component-icon" />
                    {/*Imagem*/}
                </button>
                <button className="button-component" onClick={() => {this.addComponentToCanvas('rect')}}>
                    <VectorRectangleIcon className="component-icon" />
                    {/*Retângulo*/}
                </button>
                <button className="button-component" onClick={() => {this.addComponentToCanvas('circle')}}>
                    <VectorCircleIcon className="component-icon" />
                    {/*Círculo*/}
                </button>
                <button className="button-component" onClick={() => {this.addComponentToCanvas('qrcode')}}>
                    <QrcodeIcon className="component-icon" />
                    {/*Qr Code*/}
                </button>
            </div>
        );
    }

    renderTextControls(){
        if(this.state.showTextControls) {
            return (
                <div id="textControls" className="text-controls" ref="textControls">
                    <div className="control-item">
                        <label htmlFor="text-bg-color" className="label-control">Fonte:</label>
                        <select id="font-family" ref="textFont" onChange={(e) => {
                            this.canvas.getActiveObject().set('fontFamily', this.refs.textFont.value);
                            this.canvas.renderAll();
                        }}>
                            <option value="arial">Arial</option>
                            <option value="arial black">Arial Black</option>
                            <option value="helvetica" defaultValue>Helvetica</option>
                            <option value="myriad pro">Myriad Pro</option>
                            <option value="delicious">Delicious</option>
                            <option value="verdana">Verdana</option>
                            <option value="georgia">Georgia</option>
                            <option value="courier">Courier</option>
                            <option value="comic sans ms">Comic Sans MS</option>
                            <option value="impact">Impact</option>
                            <option value="monaco">Monaco</option>
                            <option value="optima">Optima</option>
                            <option value="hoefler text">Hoefler Text</option>
                            <option value="plaster">Plaster</option>
                            <option value="engagement">Engagement</option>
                        </select>
                    </div>

                    <div className="control-item">
                        <label htmlFor="text-color" className="label-control">Cor:</label>
                        <input type="color" id="text-color" ref="textColor" size="10" onChange={(e) => {
                            this.canvas.getActiveObject().set('fill', this.refs.textColor.value);
                            this.canvas.renderAll();
                        }}/>
                    </div>

                    <div className="control-item">
                        <label htmlFor="text-bg-color" className="label-control">Preenchimento:</label>
                        <input type="color" id="text-bg-color" size="10" ref="textBgColor" onChange={(e) => {
                            this.canvas.getActiveObject().set('backgroundColor', this.refs.textBgColor.value);
                            this.canvas.renderAll();
                        }}/>
                    </div>

                    <div className="control-item">
                        <label htmlFor="text-cmd-bold" className="label-control">
                            <input type="checkbox" name="fonttype" id="text-cmd-bold" ref="textBold" onChange={(e) => {
                                if(this.refs.textBold.checked){
                                    this.canvas.getActiveObject().set('fontWeight', 'bold');
                                    {/*this.canvas.getActiveObject().set('textDecoration', 'bold');*/}
                                }else{
                                    this.canvas.getActiveObject().set('fontWeight', '');
                                }

                                this.canvas.renderAll();
                            }}/> Negrito</label>
                    </div>

                    <div className="control-item">
                        <label htmlFor="text-cmd-italic" className="label-control">
                        <input type="checkbox" name="fonttype" id="text-cmd-italic" ref="textItalic" onChange={(e) => {
                            if(this.refs.textItalic.checked) {
                                this.canvas.getActiveObject().set('fontStyle', 'italic');
                            }else{
                                this.canvas.getActiveObject().set('fontStyle', '');
                            }
                            this.canvas.renderAll();
                        }}/> Itálico</label>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }

    renderImageControls(){
        if(this.state.showImageControls) {
            return (
                <div id="imageControls" className="image-controls" ref="imageControls">
                    <button className="button-change" onClick={() => {this.refs.fileChange.click();}}>Alterar</button>
                </div>
            );
        }else{
            return null;
        }
    }

    renderShapeControls(){
        if(this.state.showShapeControls) {
            return (
                <div id="shapeControls" className="shape-controls" ref="shapeControls">
                    <label htmlFor="shape-bg-color">Preenchimento:</label>
                    <input type="color" id="shape-bg-color" size="10" ref="shapeBgColor" onChange={(e) => {
                        this.canvas.getActiveObject().set('fill', this.refs.shapeBgColor.value);
                        this.canvas.renderAll();
                    }}/>
                </div>
            );
        }else{
            return null;
        }
    }

    renderQrCodeControls(){
        if(this.state.showQrCodeControls) {
            return (
                <div id="textControls" className="text-controls" ref="textControls">
                    <h3>Controles</h3>
                    <div id="text-wrapper" ng-show="getText()">
                        <div id="text-controls">

                            <label htmlFor="qrcode-link">Preenchimento:</label>
                            <input type="text" id="qrcode-link" ref="qrcodeLink" onChange={(e) => {
                                this.canvas.renderAll();
                            }}/>

                        </div>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }

    render() {
        const canvasClass = classNames({
            'canvas-editor': true
        });

        return (
            <div className="container-editor">
                <div className="topbar">
                    <p style={{flex: 1, fontSize: '14px'}}>Produto: <b style={{flex: 1, fontSize: '18px'}}>{this.state.productText}</b></p>
                    <div className="controls">
                        <div id="backgroundControls" className="background-controls" ref="backgroundControls">
                            <div className="control-item">
                                <label htmlFor="background-color" className="label-control">Cor de fundo:</label>
                                <input type="color" id="background-color" ref="backgroundColor" size="10" onChange={(e) => {
                                    this.canvas.backgroundColor = this.refs.backgroundColor.value;
                                    this.canvas.renderAll();
                                }}/>
                            </div>
                        </div>
                        {this.renderTextControls()}
                        {this.renderImageControls()}
                        {this.renderShapeControls()}
                    </div>
                </div>

                <div className="box">
                    <div className="components">
                        <div className="component-list">
                            {this.renderComponents()}
                        </div>
                    </div>

                    <div className="editor">
                        <canvas id="canvasEditor" ref="canvasEditor" className={canvasClass}/>
                    </div>
                </div>

                <input type="file" id="file" ref="fileUploader" style={{display: 'none'}}/>
                <input type="file" id="fileChange" ref="fileChange" style={{display: 'none'}}/>
            </div>
        );

    }
}

export default Editor;