import React, { Component } from 'react'
import { Table } from 'reactstrap'

export class User extends Component {
  render() {
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr><tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        </tbody>
        </Table>
      </div>
    )
  }
}

export default User