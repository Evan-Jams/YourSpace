import React, {Component} from 'react'

class Nav extends Component {
  render(){
    return(
      <div>
        <h1>Nav</h1>
        <button onClick={this.props.toggleShowCreate}>Toggle</button>
      </div>
    )
  }
}

export default Nav
