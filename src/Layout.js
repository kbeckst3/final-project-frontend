import React, { Component } from 'react'
import MainNavbar from './pages/main-layout/navbar/Navbar'
import RoutesPage from './router/component'
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './pages/main-layout/Sidebar/SideBar'



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <MainNavbar/>
          <SideBar/>
          <RoutesPage/>
        </div>
      </Router>

    )
  }
}

export default App
