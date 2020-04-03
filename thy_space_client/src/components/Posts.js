import React, {Component} from 'react'

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: {},
      postUser: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.findUser = this.findUser.bind(this)
  }

  findUser(){
    let foundUser = this.props.users.filter((user)=> {
      return user.id === this.props.post.user_id
    })
    this.setState({
      postUser: foundUser
    })
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
      <div>
        <h1>{this.state.postUser.username} says:</h1>
        <h4>{this.props.post.body}</h4>
        <p>{this.props.post.date}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Post
