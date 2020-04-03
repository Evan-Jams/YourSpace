import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }
  render(){
    return(
      <>
        <Nav />
        <Main />
      </>
    )
  }
}

export default App;
