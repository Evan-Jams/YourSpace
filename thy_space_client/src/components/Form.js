import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      body: '',
      date: '',
      likes: 0,
      user_id: this.props.currentUser[0].id
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
        <input type='text' placeholder="What day was thine written?" id="date" value={this.state.date} onChange={this.handleChange}/>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Form
