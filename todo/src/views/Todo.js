import React from 'react';
import Header from 'components/todo/Header.js';
import Create from 'components/todo/Create.js';
import List from 'components/todo/List.js';
import { TodoProvider } from 'TodoContext.js';

const Todo = () => {
  return (
    <TodoProvider>
      <div className="todo">
        <Header/>
        <List/>
        <Create/>
      </div>
    </TodoProvider>
  );
};

export default Todo; 