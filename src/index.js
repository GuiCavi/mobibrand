import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Editor from './components/Editor';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Editor useModel={true} type={"board"} boardType={"sell"} phone={"(19) 4132-1232"} name={"Imobiliaria"} email={"imob@teste.com"} creci={"413.21"} />, document.getElementById('root'));
=======
ReactDOM.render(<Editor useModel={true} type={"banner_3"} boardType={"sell"} phone={"(19) 4132-1232"} name={"Imobiliaria"} email={"imob@teste.com"} site={"www.realestate.com.br"} creci={"413.21"} />, document.getElementById('root'));
>>>>>>> 26be9ef2c26adf68ef4eebaea9a665059a15e9ed
registerServiceWorker();
