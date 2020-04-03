import React, {Component} from 'react'

class CreateUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      img: '',
      description: '',
      status: 'happy',
      birthday: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createUser(this.state)
  }

  render(){
    return(
      <div>
        <h1>CreateUser</h1>
        <button onClick={this.props.toggleShowCreate}>Toggle</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="text" placeholder="password" id="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="text" placeholder="img" id="img" value={this.state.img} onChange={this.handleChange}/>
          <input type="text" placeholder="description" id="description" value={this.state.description} onChange={this.handleChange}/>
          <input type="text" placeholder="birthday" id="birthday" value={this.state.birthday} onChange={this.handleChange}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default CreateUser
