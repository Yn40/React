import {useReducer, useEffect, useCallback} from 'react'


function asyncReducer(state, action){
  switch(action.type){
    case 'SUCCESS' :
      return {
        loading : false,
        data : action.data,
        error : null
      };;
    case  'LOADING':
      return {
        loading : true,
        data : null,
        error : null
      };
    case 'ERROR':
      return {
        loading : false,
        data : null,
        error : action.error
      };
    default : //보통 useReducer 에서는 error을 발생시킨다
      throw new Error("unhandled action type : ${action.type}") ;
  }
} 
export default function UseAsync(callback, deps =[], skip = false){
  const [state, dispatch] = useReducer( asyncReducer, {
    loading : false,
    data : null,
    error : null
  });

  const fetchData = useCallback( async () =>{
    dispatch({type:"LOADING"});
    try{
      const data = await callback();
      console.log(data);
      dispatch({
        type : "SUCCESS", 
        data : data
      });
    }catch(e){
      dispatch({
        type:"ERROR", 
        error:e
      });
    }
  }, [callback]);

  useEffect(() => {
    if(skip)return; 
    fetchData();  //deps 변경할때 실행
    //eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}