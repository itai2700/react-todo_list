import React from 'react'

export const Todos = ({todos, deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map( todo => {
        return (
            <div className="collection-item" key={todo.id}>
                <li style={{listStyle:'none'}} >
                    {todo.content}
                    <button className='delete btn waves-effect right' onClick={() => {deleteTodo(todo.id)}} >Delete</button>
                </li>
            </div>
        )})    
    ) : (
        <p  className="center" >You have no todo\'s left in the list</p>
    )
    
    return (
        <div className='todos collection with-header'>
             <li style={{listStyle:'none'}} className="collection-header"><h2>Your Todos</h2></li>
            <div>{todoList}</div>
        </div>
    )
}

