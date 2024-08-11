import React, { Component } from 'react'

export class App extends Component {
 constructor () {
  super(); // calling th e parent constructor
  this.state = {
    name:"Leo"
  }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}

export default App;
