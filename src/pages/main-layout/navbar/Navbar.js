import React, { Component } from 'react'
import {Navbar, NavbarBrand, Nav, } from 'reactstrap'

import { Link } from 'react-router-dom'

export class MainNavbar extends Component {
  render() {
    return(
      <div>
        <Navbar dark={false} className={"navbar-dark bg-dark"}>
          <NavbarBrand  href={"/"}>Worth</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link className="nav-link" to="/user/signup">Sign Up</Link>
            <Link className="nav-link" to="/user/login">Login Up</Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default MainNavbar