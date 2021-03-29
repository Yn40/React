import React from 'react';
import Header from '../components/todo/Header.js';
import Input from '../components/todo/Input.js';
import List from '../components/todo/List.js';

const Todo = () => {
  return (
    <div className="todo">
        <Header/>
        <div className="cont">
        <List/>
        </div> 
        <Input/>
    </div>
  );
};

export default Todo;