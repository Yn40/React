import logo from './logo.svg';
import './App.scss';
import List from './components/List.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
       <List/>
      </DndProvider>
    </div>
  );
}

export default App;
