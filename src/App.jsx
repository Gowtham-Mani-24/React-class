import React, { Component } from 'react'

export class App extends Component {
 constructor () {
  super(); // calling th e parent constructor
  this.state = {
    count:0
  }
  }

  incClick = () => {     
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state);
  }

  decClick = () => {
    this.setState({
      count:this.state.count -1
    })
  }

  resClick = () => {
    this.setState({
      count:0
    })
  }
 
  render() {
    console.log(this.state);

    
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incClick}>Increment</button>
        <button onClick={this.decClick}>Decrement</button>
        <button onClick={this.resClick}>Reset</button>
      </div>
    )
  }
}

export default App;
