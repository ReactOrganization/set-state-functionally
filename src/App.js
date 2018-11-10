import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      count: 0
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  oneIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  oneDecrement = () => {
    this.setState(prevState => {
      return {
       count: prevState.count - 1 
      }
    })
  }


  render() {
    return (
      <div className="App">
        {Object.keys(this.state.data).map((key, i) =>
        <div>{key}</div>
        )}
        <h1>Numbers</h1>
        {this.state.count}
        <hr/>
        <button onClick={this.reset}>Reset</button><br/>
        <button onClick={this.oneIncrement}>Increment by one</button> 
        <button onClick={this.oneDecrement}>Increment by one</button> 

      </div>
    );
  }
}

export default App;
