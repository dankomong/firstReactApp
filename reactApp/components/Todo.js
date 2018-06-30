import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      completed: this.props.completed
    }
  }

  render() {
    return (
      <div>
        <li>
          <button type ="submit" onClick={() => this.setState({completed: !this.state.completed})} name="X">Cross Out</button>{this.state.completed ? <strike>{this.props.task}</strike> : this.props.task}
          <button type ="submit" onClick={() => this.props.xClick(this.props.index)} name = "Delete">Remove</button>
          </li>
      </div>
    )
  }
}

export default Todo;
