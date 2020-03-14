import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  }

  
  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.password){
      return false
    } else {

      return this.props.handleLogin(this.state)
    }
  }

  render() {
    console.log(this.props)
    // let {username, password} = this.props.handleLogin
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleAllInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleAllInput} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
