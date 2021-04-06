import React, { useCallback, useRef, useState } from 'react';
import {MdDone, MdDelete, MdModeEdit, MdClose, MdMenu} from 'react-icons/md';
import { useTodoDispatch } from 'TodoContext';
import { useTodoState } from 'TodoContext.js';
import {useDrag, useDrop} from "react-dnd";
import Modi from 'components/todo/Modi.js';


const Item = ({done, text, id, idx, moveItem}) => {
  const dispatch = useTodoDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(text);
  const todoIpt = useRef();
  const beforeIdx = 0;
  const [{isDragging}, drag, preview] = useDrag({ 
    type:"unit",
    item:{id, idx},
    collect:(monitor) => ({
      isDragging : monitor.isDragging()
    })
  });

  const [{isOver}, drop] = useDrop({
    accept:"unit",
    collect : monitor => ({
      isOver:monitor.isOver()
    }),
    hover(todo, monitor) {
      const dragItem = {
        idx : todo.idx, 
        id : todo.id,
      }
      const hoverItem = {
        idx : idx, 
        id : id,
      }
      if (dragItem.id !== hoverItem.id) {
        moveItem(dragItem, hoverItem);
        todo.idx = hoverItem.idx; //index 값 변경 안해주면 프리뷰가 제대로 안보임
      }
    }
  });
  


  const onToggle = e => { 
    dispatch({
      type:"TOGGLE",
      id
    });
  };

  const onRemove = e => {
    // e.preventDefault(); 이벤트를 작동하지 못하게함
    e.stopPropagation(); //상위돔으로 이벤트 전달 안함
    dispatch({
      type:"REMOVE",
      id
    });
  };

  const onToggleModi = e => { 
    e.stopPropagation();
    setOpen(!open);
    if(!open){
      setTimeout(()=>{
        todoIpt.current.focus();
      }, 0.1);
    }else setValue(text);
    
  };
  
  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    // e.stopPropagation();
    e.preventDefault();
    let temp = value.trim();
    if(temp === "" || temp === null){
      alert("내용을 입력해주세요!!");
      todoIpt.current.focus();
      return;
    }
    dispatch({
      type:"UPDATE",
      id,
      text : temp
    });
    setValue(temp);
    setOpen(!open);
  }


  return (
    <div className={"unit "+(isDragging?"mv":"")} ref={(node)=>drop(preview(node))}> 
      {
        open ? (
          <div className="modi bx_ipt">
            <form onSubmit={onSubmit}>
              <input className="ipt" type="text" ref={todoIpt} value={value} onChange={onChange}/>
              <button type="button" className="btn_cls" onClick={onToggleModi}><MdClose/></button>
              <button type="submit" className="btn_com"><MdDone/></button>
            </form>
          </div>
      ) : (
          <div className={"item " + (done?"done":"")} onClick={onToggle}>
            <span className="bx_chk">
              <MdDone className="chk"/>
            </span>
            <p className="text">{text}</p>
            <button type="button" className="btn_modi" onClick={onToggleModi}><MdModeEdit/> </button>
            <button type="button" className="btn_delete" onClick={onRemove}><MdDelete/> </button>
          </div>
        )
      }
     <span className="btn_move" ref={drag}><MdMenu/></span>
    </div>
  );
};


export default Item;
