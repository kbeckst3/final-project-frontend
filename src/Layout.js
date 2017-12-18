import React, { Component } from 'react'
import MainNavbar from './pages/main-layout/navbar/Navbar'
import RoutesPage from './router/component'
import { BrowserRouter as Router } from 'react-router-dom'



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
