import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </>
  );
}

