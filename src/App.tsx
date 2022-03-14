import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Tasktodo } from './properties';
import TaskList from './components/TaskList';

const App: React.FC = () => {

  const [tasktodo, setTasktodo] = useState<string>("");
  const [alltasks, setAlltasks] = useState<Tasktodo[]>([]);

  const addTasks= (e:React.FormEvent)=>{
    e.preventDefault();
    if(tasktodo){
      setAlltasks([...alltasks, {id: Date.now(), tasktodo, isComplete: false}]);
      setTasktodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Track My Tasks</span>
      <InputField tasktodo={tasktodo} setTasktodo={setTasktodo} addTasks={addTasks}/>
      <TaskList alltasks={alltasks} setAlltasks={setAlltasks}/>
    </div>
  );
};

export default App;
