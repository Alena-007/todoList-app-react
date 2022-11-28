import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
        <h1>Edit your Todo List</h1>
      </header>
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
};
