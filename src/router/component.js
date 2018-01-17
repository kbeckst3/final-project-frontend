import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../pages/MainPage/Mainpage'
import User from '../pages/user/User'
import SignUp from '../pages/user/signup/index'
import UpdateUser from '../pages/user/Deleteupdate'
import { Login } from '../pages/user/Login/index'


import Products from '../pages/Product-page/main-page/main-product'
import { Option1 } from '../pages/Product-page/section-1/option-1'
import { Option2 } from '../pages/Product-page/section-2/option-2'
import { Option3 } from '../pages/Product-page/section-3/option-3'
import { Option4 } from '../pages/Product-page/section-4/option-4'
import { Option5 } from '../pages/Product-page/section-5/option-5'

export class RoutesPage extends Component {
  render () {
    return (
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/user/signup' component={SignUp}/>
          <Route path='/user/update/:id' component={UpdateUser}/>
          <Route path='/user' component={User}/>
          <Route path='/products/main' component={Products}/>
          <Route path='/products/option1' component={Option1}/>
          <Route path='/products/option2' component={Option2}/>
          <Route path='/products/option3' component={Option3}/>
          <Route path='/products/option4' component={Option4}/>
          <Route path='/products/option5' component={Option5}/>
        </Switch>
    )
  }
}

export default RoutesPage