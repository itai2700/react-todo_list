import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
    if (this.state.content.length) {
      document.getElementsByClassName('collection-header')[0].innerHTML =
        'Your Todos';
      document.getElementsByClassName('collection-header')[0].style.color =
        'black';
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content.length) {
      this.approvedSubmit(e);
    } else {
      document.getElementsByClassName('collection-header')[0].innerHTML =
        'please enter content';
      document.getElementsByClassName('collection-header')[0].style.color =
        'red';
    }
  };

  approvedSubmit = (e) => {
    this.props.addTodo(this.state);
    this.setState({ content: '' });
  };

  render() {
    return (
      <div className='addTodo row'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='input-field col'
            onChange={this.handleChange}
            value={this.state.content}
          />
          <button className='btn waves-effect right'>Add Task</button>
        </form>
      </div>
    );
  }
}
