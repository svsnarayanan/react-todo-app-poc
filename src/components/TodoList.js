import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('myTodoListLS')) || []
  );

  const AddTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    localStorage.setItem('myTodoListLS', JSON.stringify(newTodos));
    setTodos(newTodos);
    console.log(...todos);
        
    
    
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    localStorage.setItem('myTodoListLS', JSON.stringify(removedArr));
    setTodos(removedArr);
        
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    localStorage.setItem('myTodoListLS', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
        
  };

  return (
    <>
      <h1>My Todo List</h1>
      <TodoForm onSubmit={AddTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
