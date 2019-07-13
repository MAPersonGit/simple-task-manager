import React from 'react';
import {TaskListConnected} from './taskslist/taskslist';


export const App = (): JSX.Element => {
  return (
    <div className="App">
      <TaskListConnected/>
    </div>
  );
}
