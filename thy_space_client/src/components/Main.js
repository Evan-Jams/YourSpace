import React, {Component} from 'react'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  async createPost(formData) {
    let response = await fetch (`http://localhost:3000/`, {
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
      return({ users: [...prevState.users, data]})
    })
    this.login(data.username)
  }


  render(){
    return(
      <div>
        <div>
          <button>Make ye a post</button>
        </div>
        <div>
          {this.state.posts.map(post => (
            <Post post={post} />
          ))}
        </div>
      </div>
    )
  }
}

export default Main
