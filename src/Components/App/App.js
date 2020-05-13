import React, { Component } from 'react';
import { Todos } from '../Todos/Todos';
import AddTodo from '../AddTodo/AddTodo';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Play call of duty' },
      { id: 3, content: 'Take a shower' },
    ],
  };

  deleteTodo = (id) => {
    let duplicatedTodoList = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: duplicatedTodoList,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.ceil(Math.random() * 10000);
    let todos = [...this.state.todos, todo];
      this.setState({ todos });
  };

  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <h2 className='collection-header'>Add A Task</h2>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
