import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import CreateUser from './components/CreateUser'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: false,
      users: [],
      showCreate: false,
    }
    this.getUsers = this.getUsers.bind(this)
    this.login = this.login.bind(this)
    this.createUser = this.createUser.bind(this)
    this.toggleShowCreate = this.toggleShowCreate.bind(this)
  }

  componentDidMount() {
    this.getUsers()
  }

  toggleShowCreate() {
    this.setState({
      showCreate: !this.state.showCreate
    })
  }

  async getUsers() {
    let response = await fetch(`http://localhost:3000/users/`)
    let data = await response.json()
    console.log(data)
    this.setState({
      users: [...data]
    })
  }

  login(username) {
    let foundUser = this.state.users.filter((user)=> {
      return user.username === username
    })
    this.setState({
      currentUser: foundUser
    })
  }

  async createUser(formData) {
    let response = await fetch (`http://localhost:3000/users`, {
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
      <>
        {this.state.showCreate
        ?<CreateUser toggleShowCreate={this.toggleShowCreate} createUser={this.createUser}/>
        :<>
        <Nav toggleShowCreate={this.toggleShowCreate} currentUser={this.state.currentUser} login={this.login}/>
        <Main />
        </>
        }
      </>
    )
  }
}

export default App;
