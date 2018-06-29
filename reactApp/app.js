import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: 'Skydive', completed: false}, {taskText: 'Play beach volleyball, completed: false'}, {taskText: 'Code some JavaScript', completed: false}]

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
      <li><button type="submit" onClick={() => this.setState({completed: !this.state.completed})} name="X">X</button>{this.state.completed ? <strike>{this.props.task}</strike> : this.props.task}</li>
    </div>
    )
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ul>
        {dummyData.map((todo, i) => <Todo task = {todo.taskText} completed= {todo.completed} key = {i}/>)}
      </ul>
    )
  }
}

class InputLine extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <input type = "text" name="task" placeholder="task"></input>
        <button type="submit" name = "Add todo">Add todo </button>
      </div>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [];
    }
  }

  componentDidMount() {
    //fetch data from server and save it in a variable and then call this.setState
       //this.setState({t})
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos = {this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
   document.getElementById('root'));
