import React from 'react';
const { v4 } = require('uuid');

const Form = ({ inputValue, setInputValue, todos, setTodos, setStatus }) => {
  const inputValueHandler = e => {
    setInputValue(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([...todos, { text: inputValue, completed: false, id: v4() }]);
    setInputValue('');
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputValue}
        onChange={inputValueHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
