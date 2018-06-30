import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleTyping(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        <input type = "text" name="task" placeholder="task" value = {this.state.text} onChange = {(e) => this.handleTyping(e)}></input>
        <button onClick = {() => this.props.submit(this.state.text)} type="submit" name = "Add todo">Add todo </button>
      </div>
    )
  }
}

export default InputLine;
