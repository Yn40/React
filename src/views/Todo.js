import React from 'react';
import Header from '../components/todo/Header.js';
import Create from '../components/todo/Create.js';
import List from '../components/todo/List.js';

const Todo = () => {
  return (
    <div className="todo">
        <Header/>
        <List/>
        <Create/>
    </div>
  );
};

export default Todo;