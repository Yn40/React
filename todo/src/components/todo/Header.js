import React from 'react';
import { useTodoState } from 'TodoContext';
import firecracker from 'img/firecracker.png';

const Header = () => {
  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const today = {
    date : date.getFullYear() +"."+ (date.getMonth()+1) +"."+ date.getDate(),
    day : week[date.getDay()]
  };
  const state = useTodoState(); 
  let yet = 0;
  state.map(todo => !todo.done ? yet++ : yet);

  return (
    <header>
      <h1>{today.date} <span className="day">{today.day}</span></h1>
      <p className="cnt">총 <b>{state.length}</b>개 - <b>{yet}</b>개 남음</p>
      <img src={firecracker} alt="폭죽" className={"img_fire "+((yet === 0 && state.length!==0)?"ac":"")}/>
      <img src={firecracker} alt="폭죽" className={"img_fire "+((yet === 0 && state.length!==0) === 0?"ac1":"")}/>
      
    </header>
  );
};

export default Header;