import React, {Component} from 'react'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
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
