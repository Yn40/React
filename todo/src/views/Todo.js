import React from 'react';
import Header from 'components/todo/Header.js';
import Create from 'components/todo/Create.js';
import List from 'components/todo/List.js';
import { TodoProvider } from 'TodoContext.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';



const Todo = () => {
  return (
    <TodoProvider>
      <div className="todo">
        <Header/>
          <DndProvider backend={HTML5Backend}>
            <List/>
          </DndProvider>
        <Create/>
      </div>
    </TodoProvider>
  );
};

export default Todo; 