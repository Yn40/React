import React from 'react';
import Item from '../todo/Item.js';

const List = () => {
  return (
    <div className="cont">
      <Item text="todo 만들꺼에요~☆★" done={true}/>
      <Item text="인사하기" done={false}/>
      <Item text="악수하기" done={true}/>
      <Item text="발흔들기" done={false}/>
      <Item text="출근하기" done={false}/>
    </div>
  );
};

export default List;