import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/containers/App';
import Fruitmachine from './components/containers/Fruitmachine';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/machine' component={Fruitmachine} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
console.log(process.env)
registerServiceWorker();
