import React, { useState, useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
  });
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

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
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};
