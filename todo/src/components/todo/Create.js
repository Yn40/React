import React, {useRef, useState} from 'react';
//열고 닫으려면 상태관리가 필요해서 useState 불러옴
import {MdDone} from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from 'TodoContext';

const Create = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const todoIpt = useRef();
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggele = () => {
    if(!open){
      //click focus 충돌 - . e.preventDefault() , e.stopPropagation() 버블링을 막아도 안먹힘
      setTimeout(()=>{
        todoIpt.current.focus();
      }, 0.1);
    }
    setOpen(!open);
  };

  const onChange = e =>{setValue(e.target.value);}

  const onSubmit = e => {
    e.preventDefault();
    let temp = value.trim();
    if(temp === "" || temp === null){
      alert("내용을 입력해주세요!!");
      todoIpt.current.focus();
      return;
    }
    dispatch({
      type:"CREATE",
      todo:{
        id : nextId,
        text : value,
        done : false,
      }
    });
    setValue("");
    setOpen(!open);
  };
  

  return (
    <>
      <div className={"create " + (open?"":"hide")}>
        <div className="bx_ipt">
          <form onSubmit={onSubmit}>
            <input type="text" className="ipt" ref={todoIpt} value={value} onChange={onChange} placeholder="할 일을 입력해주세요!!"/>
            <button type="submit" className="btn_com"><MdDone/></button>
          </form>
        </div>
      </div>
      <button className={(open?"btn_cls":"btn_add")} onClick={onToggele}>+</button> 
    </>
  );
}; 
 
export default Create;  