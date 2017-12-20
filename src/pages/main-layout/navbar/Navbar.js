import React, { Component } from 'react'
import {Navbar, NavbarBrand, Nav, } from 'reactstrap'
import Login from '../../user/Login'

import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter } from 'reactstrap'


export class MainNavbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = (e) => {
    e.preventDefault()
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    return(
      <div>
        <Navbar dark={false} className={"navbar-dark bg-dark"}>
          <NavbarBrand  href={"/"}>Worth</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Link className="nav-link" to="/user/signup">Sign Up</Link>
            <a className="nav-link" onClick={this.toggle} >Login</a>
          </Nav>
        </Navbar>
        <Modal isOpen={this.state.modal}>
        <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="userName">Username</Label>
              <Input type="username" placeholder="Username"/>
            </FormGroup>
            <FormGroup>
              <Label for="username">Password</Label>
              <Input type="password" placeholder="Password"/>
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button>Cancel</Button>
            <Button color="primary">Log In</Button>
          </ModalFooter>
        </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default MainNavbar