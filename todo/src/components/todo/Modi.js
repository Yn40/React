import React from 'react';
import {MdDone, MdClose} from 'react-icons/md';

const Modi = () => {
  return (
    <div className="modi">
      <div className="bx_ipt">
        <input className="ipt" type="text" autoFocus />
        <button className="btn_cls"><MdClose/></button>
        <button className="btn_com"><MdDone/></button>
      </div>
    </div>
  );
};

export default Modi;