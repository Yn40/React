import React, {useState} from 'react';
//열고 닫으려면 상태관리가 필요해서 useState 불러옴
import {MdDone} from 'react-icons/md';

const Create = () => {
  const [open, setOpen] = useState(false);
  const onToggele = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={"create " + (open?"":"hide")}>
        <div className="bx_ipt">
          <input type="text" className="ipt" placeholder="할 일을 입력해주세요" autoFocus />
          <button type="submit" className="btn_com"><MdDone/></button>
        </div>
      </div>
      <button className={(open?"btn_cls":"btn_add")} open={open} onClick={onToggele}>+</button> 
    </>
  );
}; 
 
export default Create;  