import React, {useState} from 'react';
import axios from 'axios';
// import {useAsync} from 'react-async';
import {useUsersState, useUsersDispatch, getUsers} from 'UsersContext'
import User from 'User';

// async function getUsers(){
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return response.data;
// }

const Users = () => {
  // const [state, refetch] = useAsync(getUsers, [], true);
  //비구조 할당
  // const {loading, data:users, error} = state;
  //reload ===  refetch
  // const {data:users, error, isLoading,  reload, run} = useAsync({
  //   deferFn:getUsers 
  // });
  const [userId, setUserId] =useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const {data:users, loading, error} = state.users;
  const fetchData = ()=>{
    getUsers(dispatch);
  }


  if (loading) return <div className="loading">로딩중..</div>;
  if (error) return <div className="error">에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData} className="btn">불러오기</button>;

  return ( 
    <div>
      {users.map(user => ( 
        <p key={user.id} onClick={()=> setUserId(user.id)}>
          {user.id} - {user.username} ({user.name}) - {user.email}
        </p>
      ))}
      <button className="btn" onClick={fetchData}>다시 불러오기!</button>
      { userId && <User id={userId}/> }
    </div>
  );
  
};

export default Users;