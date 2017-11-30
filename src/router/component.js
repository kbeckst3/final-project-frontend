import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import MainPage from '../pages/main-layout/component'
import User from '../pages/user/component'
import SignUp from '../pages/user/signup/component'

export class RoutesPage extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/user/signup' component={SignUp}/>
        <Route path='/user' component={User}/>
      </Switch>
    )
  }
}

export default RoutesPage