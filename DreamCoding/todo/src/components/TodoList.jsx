import '.././App.css';
import React from 'react';
import { useState } from 'react';
import AddTodo from './AddTodo/AddTodo.jsx';

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
    console.log(todo)
  }

  // 삭제하기
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=>{return todo.id !== id}))
  }

  return (
    <section>
      <ul>
        {
          todos.map((todo)=>{
            return (
              <li key={todo.id}>
                <input type='checkbox'/>
                <span>{todo.title}</span>
                <button onClick={() => {deleteTodo(todo.id)}}>delete</button>
              </li>
            )
          })
        }
      </ul>
      <AddTodo onAdd={handleAdd}/>
      
    </section>
  );
}

