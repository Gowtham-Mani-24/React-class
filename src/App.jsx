import React, { Component } from 'react';
import Hello from './components/Hello';


class App extends Component {
  render() {

    const names = [
      "Leo",
      "Harold",
      "Antony"
    ]

    return (
      <div>
        <Hello 
        name={names[0]}
        />
        <Hello 
        name={names[1]}
        />
        <Hello 
        name={names[2]}
        />
      </div>
    )
  }
}

export default App;
