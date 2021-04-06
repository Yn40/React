//contextApi 
import React, {createContext, useContext, useReducer, useRef} from 'react';
import update from 'immutability-helper';

// const initialTodos =[];
const initialTodos =[
  {
    id : 1,
    text : "todo 만들꺼에요~☆★",
    done : true,
  },
  {
    id : 2,
    text : "인사하기",
    done : false,
  },
  {
    id : 3,
    text : "악수하기",
    done : false,
  },
  {
    id : 4,
    text : "발흔들기",
    done : true,
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
      console.log(action);
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
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = state.length !== 0 ? state[state.length-1].id+1 : 1;//useRef(5);

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

