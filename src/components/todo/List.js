import React from 'react';
import { useTodoState } from 'TodoContext.js';
import Item from 'components/todo/Item.js';

const List = () => {
  const list = useTodoState();
  console.log(list);

  return (
    <div className="cont">
      {
        list.map(todo=>(
          <Item key = {todo.id} id = {todo.id} text = {todo.text} done={todo.done}/>
        ))
      }
    </div>
  );
};

export default List;