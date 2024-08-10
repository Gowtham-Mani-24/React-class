import React, { Component } from 'react'

class Description extends Component {
    render(){
      return (
        <p>A message to <b>{this.props.name}</b> the world that we have here</p>
      )
    }
  }

export default Description;
