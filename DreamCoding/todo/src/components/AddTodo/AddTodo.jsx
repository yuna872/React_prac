import React from 'react';
import { useState } from 'react';

export default function AddTodo({onAdd}) {
  const [title, setTitle] = useState('')

  const handleChange = (e) => setTitle(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({'id' : '고유한 값', title, status: 'active'})
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

