import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, ModalFooter } from 'reactstrap'

export class Login extends Component {
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
        <Modal isOpen={this.state.modal} onClick={this.toggle}/>
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
            <Button>Log In</Button>
          </ModalFooter>
        </ModalBody>
      </div>
    )
  }
}

export default Login