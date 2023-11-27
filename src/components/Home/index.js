// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isLoggedIn: false}

  handleLogin = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="login-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout handleLogout={this.handleLogout} />
          ) : (
            <Login handleLogin={this.handleLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
