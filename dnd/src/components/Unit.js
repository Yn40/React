import React, {useRef} from 'react';
import {useDrag, useDrop} from "react-dnd";

const Unit = ({text, id, index, moveItem}) => {
  const ref = useRef();
  const [{isDragging}, drag] = useDrag(
    {
      type:"unit", //필수 없음 에러남
      item: {id, index},
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }
  );
  
  const [{isOver}, drop] = useDrop({
    accept : "unit",
    collect : monitor => ({
      isOver : monitor.isOver()
    }),
    hover(item, monitor){
      if(!ref.current) return;
      // console.log("---hover------");
      // console.log(index+ " = "+item.index);
      const dragIndex = item.index;
      const hoverIndex = index;
      if(dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top)-2;  // 호버되는 element의 수직적 중간위치
      const clientOffset = monitor.getClientOffset();// 마우스의 위치 가져오기
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // console.log("---hover--2----");
       // index, 마우스의 위치가 모두 hover된 것의 이전이면 그대로
       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // console.log("---hover---3---");
      // index, 마우스의 위치가 모두 hover된 것의 이후면 그대로
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // console.log("---hover---4--");
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;

    }
  });
  drag(drop(ref));

  return (
    <div className={"unit " + (isDragging?"mv":"")} ref={ref}>
      {text}
    </div>
  );
};

export default Unit;