import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import TodoList from './TodoList'

const todos = [{taskText: 'Skydive', completed: false}, {taskText: 'Play beach volleyball, completed: false'}, {taskText: 'Code some JavaScript', completed: false}]

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos
    }
  }

  componentDidMount() {
    //fetch data from server and save it in a variable and then call this.setState\
    // const todos = fetch data from server
  this.setState({todos})
  }

  addTodo(taskName) {
    this.setState({
      todos: this.state.todos.concat({taskText: taskName, completed: false})
    });
  }

  removeTodo(index) {
    var cloneArray = this.state.todos.slice();
    cloneArray.splice(index, 1);
    this.setState({
      todos: cloneArray
    })
  }

  render() {
    return (
      <div>
        <InputLine submit = {(e) => this.addTodo(e)} />
        <TodoList todoXClick = {(i) => this.removeTodo(i)} todos = {this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
