import React, {Component} from 'react'
import Login from './Login.js'

class Nav extends Component {
  render(){
    return(
      <div>
        <h1>ThySpace</h1>
        <>
        {this.props.currentUser
          ?
          <>
          <button onClick={this.props.logout}>Log out</button>
          <h2>{this.props.currentUser[0].username}</h2>
          </>
          :
          <>
          <button onClick={this.props.toggleShowCreate}>Join thine ranks!</button>
          <Login login={this.props.login}/>
          </>
        }
        </>
      </div>
    )
  }
}

export default Nav
