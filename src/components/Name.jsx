import React, { Component } from 'react'

class Name extends Component{
    render(){
        console.log(this.props);
      return(
        <div>
          <h1>Hi {this.props.name}</h1>
        </div>
      )
    }
  }

export default Name;
