import React, { useState } from 'react';
import Item from './Item';

const initialItems =[
  {
    id : 1,
    text : "todo 만들꺼에요~☆★",
    done : true,
  },
  {
    id : 2,
    text : "인사하기",
    done : false,
  },
  {
    id : 3,
    text : "악수하기",
    done : false,
  },
  {
    id : 4,
    text : "발흔들기",
    done : true,
  },
];

const List = () => {
  const [items, setItems] = useState(initialItems);
  const moveItem = () =>{
    //이동
  };

  return (
    <div className="cont">
      <Item id="1" text="하하하하"/>
      <Item id="2" text="오오오오"/>
      <Item id="3" text="루루"/>
      <Item id="4" text="ㅋㅋㅋㅋ"/>
      <Item id="5" text="하하하무무"/>
    </div>
  );
};

export default List;