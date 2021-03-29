import React from 'react';
import {MdDone, MdDelete} from 'react-icons/md';

const Item = () => {
  return (
    // <div class="item">
    //   <span class="bx_chk">
    //     <MdDone class="chk"/>
    //   </span>
    //     <p class="text">출근하기!!!</p>
    //   <MdDelete class="btn_delete"/>
    // </div> 
    <div class="item"> 
      <span class="bx_chk">
        <MdDone class="chk"/>
      </span>
        <p class="text">출근하기!!!</p>
      <MdDelete class="btn_delete"/> 
    </div>
  );
};

export default Item;