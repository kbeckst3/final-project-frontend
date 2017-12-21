import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default class SideBar extends Component {
  render () {
    return (
      <div className="sidebar">
        <Link to>Option 1</Link>
        <Link to>Option 2</Link>
        <Link to>Option 3</Link>
        <Link to>Option 4</Link>
        <Link to>Option 5</Link>
      </div>
    )
  }
}