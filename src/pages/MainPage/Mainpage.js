import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'


export class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind
  }
  render () {
    return (
      <div>
        <h1>df</h1>

      </div>
    )
  }
}

export default MainPage