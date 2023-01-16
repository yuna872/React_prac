import '../../App.css';
import React from 'react';
import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
import { useEffect } from 'react';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFormLocalStorage())

  // 추가하기
  const handleAdd = (todo) => {
    // 새로운 todo 를 todos에 업데이트
    setTodos([...todos, todo])
  }
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => 
      todo.id === updated.id ? updated : todo
    ))
  }
  // 삭제하기
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo)=> todo.id !== deleted))
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          filtered.map((todo)=> (
            <Todo 
              key={todo.id} 
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
      
    </section>
  );
}

function readTodosFormLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo)=>todo.status===filter)
}

