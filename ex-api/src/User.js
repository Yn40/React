import React from 'react';
import axios from 'axios';
// import useAsync from 'useAsync';
import {useAsync} from 'react-async';

async function getUser({id}){
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/"+id
  );
  return response.data;
}

const User = ({id}) => {
  // const [state] = useAsync(()=>getUser(id), [id]);
  // const {loading, data : user, error} = state;
  const {
    data : user,
    error,
    isLoading
  } = useAsync({
    promiseFn:getUser,
    id,
    watch :id
  })

  if (isLoading) return <div className="loading">로딩중..</div>;
  if (error) return <div className="error">에러가 발생했습니다</div>;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </div>
  );
};


export default User;