import React, { Component } from 'react'
import { Table } from 'reactstrap'
import gql from 'graphql-tag'
import { Button } from 'reactstrap'
import { graphql } from 'react-apollo'
import { push } from 'react-router-dom'
import { withRouter } from 'react-router'

export class User extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     id: this.props.allUserQuery.allUser.id,
  //     deleteUser: this.props.deleteUser
  //   }
  // }

  getUsers = () => {
    return this.props.allUserQuery.loading ? [] : this.props.allUserQuery.allUsers
  }

  // componentWillUpdate (nextProps) {
  //   return (this.props.allUserQuery.allUsers !== nextProps.allUserQuery.allUsers)
  // }

//   onDelete = (e) => {
//     e.preventDefault()
//     const { id, deleteUser } = this.state
//     console.log('deleting user')
//     return deleteUser ({
//       variables: {
//         id: this.state.id
//       }
//     }).then(r => {
//       console.log('delete successful')})
//       .catch(err => console.log(err) )
//
// }


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
                <Button color={'warning'} onClick={(e) => e.preventDefault(history.push(`/user/update/${user.id}`))}>Update/Delete</Button>

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

// const DELETE_USER_QUERY = gql`
//     mutation deleteUser ($id: ID!) {
//         deleteUser(id: $id){
//             fullName
//         }
//     }
// `
export default withRouter(graphql(ALL_USER_QUERY, {name: 'allUserQuery'})(User))
