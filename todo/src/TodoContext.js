//contextApi 
import React, {createContext, useContext, useReducer, useState,useEffect} from 'react';
import update from 'immutability-helper';
import axios from 'axios';


const initialTodos =[
  {
    id : 1,
    text : "todo 만들꺼에요~☆★",
    done : true,
  },
  {
    id : 2,
    text : "할일을 입력해주세요!!!",
    done : true,
  },
  {
    id : 3,
    text : "예시로 입력되어 있습니다",
    done : false,
  },
  {
    id : 4,
    text : "사용많이 해주세요!!! 광고 달래요^^",
    done : false,
  },
];

function todoReducer(state, action){
  //상태관리 - useReducer에서 사용
  // create, toggle, remove
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      //전체 todo에서 엑션이 된 아이를 찾아서 반전 
      return state.map(
        todo => todo.id === action.id ? {...todo, done:!todo.done} : todo
      );
    case 'UPDATE':
      console.log(action);
      return state.map(
        todo => todo.id === action.id ? {...todo, text:action.text} : todo
      );
    case 'SORT':
      //드래그앤 드랍 이동
      const targetItem = state.filter(todo => todo.id === action.dragItem.id)[0];
      return update(state, {
        $splice:[
          [action.dragItem.idx, 1],
          [action.hoverItem.idx, 0, targetItem]
        ]
      });
    case 'REMOVE':
      //todo에서 이벤트가 일어난 아이 빼고 모두 가져오는것
      return state.filter(todo => todo.id !== action.id);
    
    //만약 처리할수없는 엑션이 오면 error
    default :
     throw new Error('unhandled action type : ${action.type}');
  }

}

const TodoStateContext = createContext();
const TodoDispatchContext =createContext();
const TodoNextIdContext = createContext();
const TodoOpenModiContext = createContext();
// Context를 만들면 그 안에 provider 컴포먼트가 있다

export function TodoProvider({children}) {
  const [loading, setLoading] = useState(false); 
  
  console.log("-=TodoProvider----");



  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  //nextId 구하기
  let maxId =0;
  state.map(todo => {
    if(maxId<todo.id) maxId = todo.id;
  });
  const nextId=maxId+1; 

  useEffect(() => {
    const FetchTodos = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setLoading(true);
        const response = await axios.get(
          'https://yn-project.herokuapp.com/todos'
        );
        // setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        throw new Error("can't find todoProvider");
      }
      setLoading(false);
    };

    FetchTodos();
  }, []);

  if(loading){
    console.log("로딩중");
  }else{
    console.log("완료");
  }

  return (
    <TodoStateContext.Provider value ={state}>
      <TodoDispatchContext.Provider value ={dispatch}>
        <TodoNextIdContext.Provider value ={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
};

export function useTodoState(){
  const context = useContext(TodoStateContext);
  if(!context){
    throw new Error("can't find todoProvider");
  }
  return context;
};

export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error("can't find todoProvider");
  }
  return context;
};

export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error("can't find todoProvider");
  }
  return context;
}

