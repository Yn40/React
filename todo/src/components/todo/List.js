import React from 'react';
import { useTodoState } from 'TodoContext.js';
import Item from 'components/todo/Item.js';

const List = () => {
  const list = useTodoState();
  console.log(list);
  const moveItem = (dragIndex, hoverIndex) =>{
    console.log("이동이동");
  }

  return (
    <div className="cont">
      {
        list.length ==  0 ? <p className="nodate">등록된 할일이 없습니다</p> : ""
      }
      {
        list.map((todo, idx)=>(
          <Item key={todo.id} id={todo.id} idx={idx} text={todo.text} done={todo.done} moveItem={moveItem}/>
        ))
      }
    </div>
  );
};
 
export default List;