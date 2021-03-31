import React, { useCallback, useRef } from 'react';
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from 'TodoContext';

const Item = ({done, text, id}) => {
  const dispatch = useTodoDispatch();

  const onRemove = e => {
    // e.preventDefault(); 이벤트를 작동하지 못하게함
    e.stopPropagation(); //상위돔으로 이벤트 전달 안함
    dispatch({
      type:"REMOVE",
      id
    });
  };

  const onToggle = e => { 
    dispatch({
      type:"TOGGLE",
      id
    });
  };

  return (
    <div className={"item " + (done?"done":"")} onClick={onToggle}> 
      <span className="bx_chk">
        <MdDone className="chk"/>
      </span>
      <p className="text">{text}</p>
      <button type="button" className="btn_delete" onClick={onRemove}><MdDelete/> </button>
    </div>
  );
};

export default Item;
