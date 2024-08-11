import React, { Component } from 'react'

export class App extends Component {
 constructor () {
  super(); // calling th e parent constructor
  this.state = {
    name:"Leo dass"
  }
  }

    handleClick = () => {
      // should not mutate the state directly
    //this.state.name = 'Harold'
    this.setState({
      name:'harold dass'
    })
    console.log(this.state);
  }

 
  render() {
    console.log(this.state);

    
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handleClick}>Update Name</button>
      </div>
    )
  }
}

export default App;
