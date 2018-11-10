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

  twoIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 2
      }
    })
  }

  threeIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 3
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

  twoDecrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 2
      }
    })
  }

  threeDecrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 3
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
        <hr/>
        <button onClick={this.twoIncrement}>Increment by two</button> 
        <button onClick={this.twoDecrement}>Increment by two</button> 
        <hr/>
        <button onClick={this.threeIncrement}>Increment by three</button> 
        <button onClick={this.threeDecrement}>Increment by three</button> 
      </div>
    );
  }
}

export default App;
