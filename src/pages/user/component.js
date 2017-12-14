import React, { Component } from 'react'
import { Table } from 'reactstrap'
import gql from 'graphql-tag'
import { Button } from 'reactstrap'
import { graphql } from 'react-apollo'
import { Link, Redirect, matchPath, push } from 'react-router-dom'
import { withRouter } from 'react-router'

export class User extends Component {



  getUsers = () => {
    return this.props.allUserQuery.loading ? [] : this.props.allUserQuery.allUsers
  }
  componentWillUpdate (nextProps) {
    return (this.props.allUserQuery.allUsers !== nextProps.allUserQuery.allUsers)
  }

  render () {

    const {history} = this.props

    const users = this.getUsers()

    return (

      <div>
        <Table striped>
          <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>
                <Button onClick={e => {history.push(`/user/update/${user.id}`)}}>Update</Button>
                <Button onClick={e => {history.push(`/user/update/${user.id}`)}}>Delete</Button>
              </td>
            </tr>
          ))}


          </tbody>
        </Table>
      </div>
    )
  }
}

const ALL_USER_QUERY = gql`
    query {
        allUsers {
            id
            fullName
            email
        }
    }
`

export default withRouter(graphql(ALL_USER_QUERY, {name: 'allUserQuery'})(User))