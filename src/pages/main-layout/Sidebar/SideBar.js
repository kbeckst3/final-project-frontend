import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { Option1 } from '../../Product-page/section-1/option-1'
import { Option2 } from '../../Product-page/section-2/option-2'
import { Option3 } from '../../Product-page/section-3/option-3'
import { Option4 } from '../../Product-page/section-4/option-4'
import { Option5 } from '../../Product-page/section-5/option-5'

export default class SideBar extends Component {
  render () {
    return (
      <div className="sidebar">
        <Link to='/products/option1'>Option 1</Link>
        <Link to='/products/option2'>Option 2</Link>
        <Link to='/products/option3'>Option 3</Link>
        <Link to='/products/option4'>Option 4</Link>
        <Link to='/products/option5'>Option 5</Link>
      </div>
    )
  }
}