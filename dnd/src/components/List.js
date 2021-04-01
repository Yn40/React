import React, { useState } from 'react';
import Unit from './Unit.js';
import update from 'immutability-helper';

const initialUnits =[
  {
    id : 1,
    text : "todo 만들꺼에요~☆★",
  },
  {
    id : 2,
    text : "인사하기",
  },
  {
    id : 3,
    text : "악수하기",
  },
  {
    id : 4,
    text : "발흔들기",
  },
];

const List = () => {
  const [units, setUnits] = useState(initialUnits);
  const moveItem = (dragIndex, hoverIndex) =>{
    //이동
    console.log(dragIndex+" --이동!!!-- "+hoverIndex);
    const DragUnit = units[dragIndex];
    setUnits(update(units, {
      $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, DragUnit],
      ],
    }));
  }

  return (
    <div className="cont">
      {
        units.map((unit, index) => (
          <Unit key={unit.id} id={unit.id} index={index} text={unit.text} moveItem ={moveItem} />
        ))
      }
    </div>
  );
};

export default List;