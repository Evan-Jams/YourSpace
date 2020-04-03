import React, {Component} from 'react'

class CreateUser extends Component {
  render(){
    return(
      <div>
        <h1>CreateUser</h1>
        <button onClick={this.props.toggleShowCreate}>Toggle</button>
        <form>
          <input></input>
        </form>
      </div>
    )
  }
}

export default CreateUser
