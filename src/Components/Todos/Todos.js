import React from 'react';

export const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
          <li className='collection-item' key={todo.id} >{todo.content}
          <button
            type='button'
            className='delete btn waves-effect right'
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
          </li>
      );
    })
  ) : (
    <p className='center'>You have no todo's left in the list</p>
  );

  return (
    <div className='todos collection'>
      <h1 className='collection-header'>Your Todos</h1>
        <ul>
         {todoList}
        </ul>
    </div>
  );
};
