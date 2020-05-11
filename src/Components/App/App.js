import React, { Component } from 'react';
import { Todos } from '../Todos/Todos';

export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play call of duty'}
    ]
  }
  
deleteTodo = (id) => {
  let duplicatedTodoList = [...this.state.todos]
  duplicatedTodoList.filter( todo => {
    return todo.id === id
  })
  return console.log(duplicatedTodoList)
}

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}
