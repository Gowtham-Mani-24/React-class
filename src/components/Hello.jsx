import React, { Component } from 'react'
import Name from './Name'
import Description from './Description'

export class Hello extends Component {
  render() {
    
    return (    
      <div>
        <Name 
         name={this.props.name}
         />
        <Description 
        name={this.props.name}
        />
      </div>
    )
  }
}

export default Hello
