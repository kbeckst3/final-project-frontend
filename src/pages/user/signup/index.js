import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import './signup.css'

export class SignUp extends Component {

  state = {
    fullName: '',
    email: '',
    password: '',
    signUpUser: this.props.signUpUser,
    fireRedirect: false
  }

  submitForm = (e) => {
    e.preventDefault()
    const {fullName, email, password, signUpUser} = this.state
    console.log('mutation sending')
    return signUpUser({
      variables: {
        fullName,
        email,
        password
      }
    }).then(rtn => {
      console.log('mutation success')
      this.setState({fireRedirect: true})
    })
      .catch(err => console.log(err))
  }

  render () {
    const {fireRedirect} = this.state
    return (
      <div className="pg-wrap">
        <Form onSubmit={this.submitForm}>
          <h1 className="text-format">Sign Up</h1>
          <FormGroup>
            <Label>Full Name</Label>
            <Input value={this.state.fullName} onChange={(e) => this.setState({fullName: e.target.value})}
                   type="Name" placeholder="Name Here"/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}
                   type="email" placeholder="Email Here"/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}
                   type="Password" placeholder="Password"/>
          </FormGroup>
          <Button type="submit" color="primary">Sign Up</Button>
        </Form>
        {fireRedirect && <Redirect to={'/user'}/>}
      </div>
    )
  }
}

const SIGN_UP_MUTATION = gql` mutation($fullName: String!, $email: String!, $password: String!){
    createUser (
        fullName: $fullName
        email: $email
        password: $password
    ){
        id
        fullName
    }
}
`

export default graphql(SIGN_UP_MUTATION, {name: 'signUpUser'})(SignUp)