import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import './signup.css'

export class SignUp extends Component {
  render () {
    return (
      <div className="pg-wrap">
        <Form>
          <h1 className="text-format">Sign Up</h1>
          <FormGroup>
            <Label>Full Name</Label>
            <Input type="Name" placeholder="Name Here"/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email Here"/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="Password" placeholder="Password"/>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SignUp