import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const initial

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const fetchUsers = async () =>{
    try{
      setUsers(null);
      setError(null);
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(response.data);
      console.log(response.data[1].name);
      setUsers(response.data);
    }catch(e){
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();  //useEffect사용해서, 컴포넌트가 처음 랜더링 될때 axios 호출을 실행한다
  }, []);

  console.log("loading : "+loading);
  console.log("error "+error);
  console.log("users "+users);

  if (loading) return <div className="loading">로딩중..</div>;
  if (error) return <div className="error">에러가 발생했습니다</div>;
  if (!users) return <div className="nodata">데이터가 없습니다</div>;

  return (
    <div>
      {users.map(user => ( 
        <p key={user.id}>
          {user.username} ({user.name}) - {user.email}
        </p>
      ))}
      <button className="btn" onClick={fetchUsers}>다시 불러오기!</button>
    </div>
  );
  
};

export default Users;