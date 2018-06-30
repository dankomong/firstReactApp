import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => <Todo index = {i} xClick = {() => this.props.todoXClick(i)} task = {todo.taskText} completed= {todo.completed} key = {i}/>)}
      </ul>
    )
  }
}

export default TodoList;
