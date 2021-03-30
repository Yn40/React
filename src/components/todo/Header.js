import React from 'react';
import { useTodoState } from 'TodoContext';

const Header = () => {
  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const today = {
    date : date.getFullYear() +"."+ (date.getMonth()+1) +"."+ date.getDate(),
    day : week[date.getDay()]
  };
  const state = useTodoState();
  let yet = 0;
  state.map(todo => todo.done ? yet++ : yet);

  return (
    <header>
      <h1>{today.date} <span className="day">{today.day}</span></h1>
      <p className="cnt">총 <b>{state.length}</b>개 - <b>{yet}</b>개 남음</p>
    </header>
  );
};

export default Header;