import React from 'react';
import Item from '../todo/Item.js';

const List = () => {
  return (
    <div>
      <Item text="todo 만들꺼에요~☆★" done={true}/>
    </div>
  );
};

export default List;