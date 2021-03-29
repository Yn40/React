import React from 'react';
import {MdDone, MdDelete} from 'react-icons/md';

const Item = ({done, text}) => {
  return (
    <div className={"item " + (done?"done":"")}> 
      <span className="bx_chk">
        <MdDone className="chk"/>
      </span>
        <p className="text">{text}</p>
      <MdDelete className="btn_delete"/> 
    </div>
  );
};

export default Item;