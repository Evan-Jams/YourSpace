import React, {Component} from 'react'
import Post from './Posts.js'
import Form from './Form.js'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.createPost = this.createPost.bind(this)
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  async createPost(formData) {
    let response = await fetch (`http://localhost:3000/posts`, {
      body: JSON.stringify(formData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    console.log(data)
    this.setState(prevState => {
      return({ posts: [...prevState.posts, data]})
    })
  }


  render(){
    return(
      <div>
        <div>
          <button onClick={this.toggleForm}>Make ye a post</button>
        </div>
        <div>
          {this.state.showForm
            ? <Form createPost={this.createPost} currentUser={this.props.currentUser}/>
          : ''
          }
          {this.state.posts.map(post => (
            <Post post={post} users={this.props.users}/>
          ))}
        </div>
      </div>
    )
  }
}

export default Main
