import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Editor from './components/Editor';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Editor useModel={true} type={"banner_3"} boardType={"sell"} phone={"(19) 4132-1232"} name={"Imobiliaria"} email={"imob@teste.com"} site={"www.realestate.com.br"} creci={"413.21"} />, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
