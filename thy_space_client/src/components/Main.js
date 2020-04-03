import React, {Component} from 'react'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      props
    }
  }


  render(){
    return(
      <div>
        <div>
          <button>Make ye a post</button>
        </div>
        <div>
          {}
        </div>
      </div>
    )
  }
}

export default Main
