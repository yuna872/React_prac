import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Todo({todo, onDelete, onUpdate}) {
    const { id, title, status } = todo;
    const handleChange = (e) => {
        onUpdate({...todo, status : e.target.checked ? 'completed' : 'active'})
    }
    const handleDelete = () => {onDelete(todo.id)}
    return (
      <li key={todo.id}>
        <input 
            type='checkbox'
            id='checkbox'
            checked={status === 'completed'} 
            onChange={handleChange}/>
        <label 
            htmlFor="checkbox"
            style={{ textDecoration : status==='active' ? 'none' : 'line-through'}}
        >{title}</label>
        <button onClick={handleDelete}><FaTrashAlt/></button>
      </li>
    );
}

