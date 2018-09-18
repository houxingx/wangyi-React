import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Switch,Route,HashRouter} from 'react-router-dom'

import store from './redux/store'
import MainRoute from './containers/MainRoute/MainRoute'
import Person from './containers/Person/Person'

import './mock/index'
import './assets/css/reset2.css'
import './assets/css/swiper.min.css'



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route  path='/person' component={Person}/>
        <Route  component={MainRoute}/>
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));

