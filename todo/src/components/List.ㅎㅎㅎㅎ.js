import React, { useState } from 'react';
import { useTodoState } from 'TodoContext.js';
import Item from 'components/todo/Item.js';
import update from 'immutability-helper';

const List = () => {
  const [list, setList] = useState(useTodoState());
  console.log(list);

  const moveItem = (dragItem, hoverItem) =>{
    const targetItem = list.filter(todo => todo.id === dragItem.id)[0];
    setList(update(list, {
      $splice:[
        [dragItem.idx, 1],
        [hoverItem.idx, 0, targetItem]
      ]
    }));
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