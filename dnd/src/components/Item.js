import React, {useRef} from 'react';
import {useDrag, useDrop} from "react-dnd";

const Item = ({text, id}) => {
  // const ref = useRef();
  const [{isDragging}, drag] = useDrag(
    {
      type:"item", //필수 없음 에러남
      item: {id},
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }
  );
  return (
    <div className={"item " + (isDragging?"mv":"")} ref={drag}>
      {text}
    </div>
  );
};

export default Item;