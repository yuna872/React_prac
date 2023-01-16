import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({todo, onDelete, onUpdate}) {
    const { id, title, status } = todo;
    const handleChange = (e) => {
        onUpdate({...todo, status : e.target.checked ? 'completed' : 'active'})
    }
    const handleDelete = () => {onDelete(todo.id)}
    return (
      <li key={todo.id} className={styles.todo}>
        <input 
            className={styles.checkbox}
            type='checkbox'
            id={id}
            checked={status === 'completed'} 
            onChange={handleChange}/>
        <label 
            className={styles.text}
            htmlFor={id}
            style={{ textDecoration : status==='active' ? 'none' : 'line-through'}}
        >{title}</label>
        <span className={styles.icon}>
          <button onClick={handleDelete} className={styles.button}><FaTrashAlt/></button>
        </span>
      </li>
    );
}

