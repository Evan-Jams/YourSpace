import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createPost(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea placeholder="What is on ye old mind?" id="body" value={this.state.body} onChange={this.handleChange}/>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Form
