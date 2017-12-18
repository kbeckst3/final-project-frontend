import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter, Redirect } from 'react-router'

class UpdateUser extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ID: '',
      fullName: '',
      email: '',
      password: '',
      updateUser: this.props.updateUserMutation,
      deleteUser: this.props.deleteUserMutation
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.userQuery.loading && nextProps.userQuery.User) {
      const user = nextProps.userQuery.User
      console.log(user.fullName)
      return this.setState({
        ID: user.id,
        fullName: user.fullName,
        email: user.email,
        password: user.email
      })
    }
  }

  updateForm = (e) => {
    e.preventDefault()
    if (!window.confirm('are you sure?')) return
    const {ID, fullName, email, password, updateUser,} = this.state
    console.log('mutation sending')
    return updateUser({
      variables: {
        ID,
        fullName,
        email,
        password
      }
    }).then(rtn => {
      console.log('update successful')
      this.setState({fireRedirect: true})
    })
      .catch(err => console.log(err))
  }
  deleteForm = (e) => {
    e.preventDefault()
    if (!window.confirm('are you sure?')) return
    const {ID, deleteUser} = this.state
    console.log('mutation sending')
    return deleteUser({
      variables: {
        ID,
      }
    }).then(rtn => {
      console.log('delete successful')
      this.setState({fireRedirect: true})
    })
      .catch(err => console.log(err))
  }

  render () {
    const {fireRedirect} = this.state
    const {loading} = this.props.userQuery
    if (loading) return <div>loading...</div>

    return (
      <div className="pg-wrap">
        <Form>
          <h1 className="text-format">Update User</h1>
          <FormGroup>
            <Label>Full Name</Label>
            <Input value={this.state.fullName} onChange={(e) => this.setState({fullName: e.target.value})}
                   type="Text" placeholder="Name Here"/>
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
          <Button type="submit" color="primary" onClick={this.updateForm}>Update</Button>
          <Button type="submit" color="danger"onClick={this.deleteForm}>Delete</Button>
        </Form>
        {fireRedirect && <Redirect to={'/user'}/>}
      </div>)
  }
}

const UPDATE_USER_MUTATION = gql`
    mutation($ID: ID!, $fullName: String!, $email: String!, $password: String!) {
        updateUser(id: $ID,fullName: $fullName, email: $email, password: $password) {
            fullName
            email
            password
        }
    }
`
const DELETE_USER_MUTATION = gql`
    mutation($ID: ID!) {
        deleteUser(id: $ID) {
            fullName
            email
            password
        }
    }
`
const QUERY_USER = gql`
    query($ID: ID!) {
        User(id: $ID) {
            id
            fullName
            email
        }
    }
`

export default withRouter(compose(
  graphql(QUERY_USER, {
    name: 'userQuery',
    options: ({match}) => ({
      variables: {
        ID: match.params.id
      }
    })
  }),
  graphql(UPDATE_USER_MUTATION, {name: 'updateUserMutation'}),graphql(DELETE_USER_MUTATION, {name: 'deleteUserMutation'}))(UpdateUser))