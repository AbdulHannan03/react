import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm';



function Todo({todos,completeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index}
            >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <button onClick{()=> removeTodo(todo.id)} >saec</button>
            </div>
        </div>
    ));
}

export default Todo
