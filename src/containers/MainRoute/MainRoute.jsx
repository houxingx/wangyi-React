import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Home from '../Home/Home'
import Classify from '../Classify/Classify.jsx'
import Meet from '../Meet/Meet.jsx'
import ShopCar from '../ShopCar/ShopCar.jsx'
import Person from '../Person/Person.jsx'
import FooterNav from '../../components/FooterNav/FooterNav'


export default class MainRoute extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path='/meet' component={Meet} />
          <Route path='/home' component={Home} />
          <Route path='/classify' component={Classify} />
          <Route path='/shopcar' component={ShopCar} />
          <Route path='/person' component={Person} />
          <Redirect to='/home'/>
        </Switch>
        <FooterNav/>
      </div>
    )
  }
}