import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    remainingCharacters: 280
  }

  handleOnChange = (e) => {
    let remChar = this.state.remainingCharacters -1
    this.setState({
      [e.target.name]: e.target.value,
      remainingCharacters: remChar
    })
  }
  
  handleType = (e) => {
   
  }

  render() {
    console.log(this.state)
   let {message, remainingCharacters} = this.state
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={message} onChange={this.handleOnChange} id="message" />
        Characters Remaining: {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
