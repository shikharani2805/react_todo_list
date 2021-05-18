import React from 'react'

const todoform = ({todos, setTodos}) => {
    return (
        <div>
           {todos.map((todo) => (
               <li key={todo.id}>
                   <input type="text" value = {todo.title} className="list"
                   onChange ={(event) => event.preventDefault()} />
               </li>
           )
           ) }
        </div>
    )
}
export default todoform;