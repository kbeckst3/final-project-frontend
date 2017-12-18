import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

export class MainCarousel extends React {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind
  }
  render () {
    return (
    <div> This will be so pretty</div>
    )
  }
}