import React, { Component } from 'react'
import MainNavbar from './pages/main-layout/navbar/component'
import RoutesPage from './router/component'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <MainNavbar/>
          <RoutesPage/>
        </div>
      </Router>

    )
  }
}

export default App
