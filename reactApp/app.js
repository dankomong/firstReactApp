import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Skydive', 'Play beach volleyball', 'Code some JavaScript']

class Todo extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
      <li><button type="submit" name="X">X</button>{this.props.task}</li>
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
        {dummyData.map((todo, i) => <Todo task = {todo} key = {i}/>)}
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
      <p> hi </p>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p> manny </p>
    )
  }
}

ReactDOM.render(
  <TodoList />,
   document.getElementById('root'));
