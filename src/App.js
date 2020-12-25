import logo from './logo.svg';
import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {count: 0};
  }

  handleClick = (increment) =>{

    this.setState(state => ({
     count: state.count + increment 
    }))
  }

  render(){
  return(
    <div>
      <button onClick = {this.handleClick.bind(this, -1)}>
        -  
      </button>
      <h1>{this.state.count}</h1>
      <button onClick = {this.handleClick.bind(this, 1)}>
        +
      </button>

    </div>
  );
 }
}

export default App;
