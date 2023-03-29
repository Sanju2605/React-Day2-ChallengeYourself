import React, { Component } from 'react'


function Location(props) {
  return (
    <div>
        <p> {props.cname} cars are made in {props.cyname}</p>
    </div>
  )
}


class Car extends Component {
  render() {
    return (
      <div>
        <h1>Jaguar</h1>
        <img src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20220228140646/Jaguar-XF-1160x653.jpg" alt=" "></img>
      </div>
    )
  }                                                                                                             
}

export {Car,Location}