import React from 'react';
import Input from '../components/todo/Input.js';
// import List from '../components/todo/List.js';
import Item from '../components/todo/Item.js';

const Todo = () => {
  return (
    <div className="todo">
       <header>
        <h1>2020.03.26 <span className="day">금요일</span></h1>
        <p className="total">총 <b>10</b>개</p>
       </header>
       <div className="cont">
        <Input/>
        <Item/>
        {/* <List></List> */}
       </div>

    </div>
  );
};

export default Todo;