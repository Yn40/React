import React from 'react';
import Header from '../components/todo/Header.js';
import Input from '../components/todo/Input.js';
// import List from '../components/todo/List.js';
import Item from '../components/todo/Item.js';

const Todo = () => {
  return (
    <div className="todo">
        <Header/>
        <div className="cont">
          <Item/> 
        </div> 
        {/* <List></List> */}
        <Input/>
    </div>
  );
};

export default Todo;