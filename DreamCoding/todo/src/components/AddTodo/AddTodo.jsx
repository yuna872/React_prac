import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}) {
  const [title, setTitle] = useState('')

  const handleChange = (e) => setTitle(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('')
    if (title === '') {
      alert('내용을 입력하세요!')
      return
    }
    onAdd({'id' : uuidv4(), 'title' : title.trim(), 'status': 'active'})
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        spaceholder='Add Todo'
        value={title}
        onChange={handleChange}
      />
      <button>Add</button>
  </form>
  );
}

