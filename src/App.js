import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/csa';

class App extends Component {
  componentDidMount = () => {
    this.setState({ data });
  }
  render() {
    // console.log(data ? data.map(astronaut => astronaut) : 'hi')
    // console.log(data ? new Map(data.data => data) : null);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {data ? data.map(astronaut =>
          (<p key={astronaut.id}className="App-intro">
            {astronaut.name}
          </p>),
        ) : null
        }
      </div>
    );
  }
}

export default App;
