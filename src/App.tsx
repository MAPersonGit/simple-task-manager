import React from 'react';
import './App.css';
import {TasksList} from './components/Taskslist';

const App: React.FC = () => {
  return (
    <div className="App">
      <TasksList/>
    </div>
  );
}

export default App;
