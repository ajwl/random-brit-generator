import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/containers/App';
import Fruitmachine from './components/containers/Fruitmachine';
import {InfoBox} from './components/presentational/InfoBox';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <IndexRoute component={App} />
      <Route path='/machine' component={Fruitmachine} />
      <Route path='/info' component={InfoBox} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
