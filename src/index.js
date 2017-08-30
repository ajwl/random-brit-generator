import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import Root from './Root';
import App from './components/App';
import Fruitmachine from './components/containers/Fruitmachine';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/machine' component={Fruitmachine} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
