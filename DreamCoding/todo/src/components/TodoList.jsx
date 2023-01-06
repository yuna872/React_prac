import '.././App.css';
import React from 'react';
import { useState } from 'react';
import AddTodo from './AddTodo/AddTodo.jsx';
import Todo from './Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { 
      'id' : 1,
      'title' : '강의 보기',
      'status' : 'active'
    },
    {
      'id' : 2,
      'title' : '카페 가기',
      'status' : 'active'
    },
    {
      'id' : 3,
      'title' : '청소 하기',
      'status' : 'active'
    },
  ])

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

  return (
    <section>
      <ul>
        {
          todos.map((todo)=> (
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

