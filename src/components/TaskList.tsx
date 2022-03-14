import React from 'react'
import { Tasktodo } from '../properties';
import IndividualTask from './IndividualTask';


interface props{
    alltasks: Tasktodo[];
    setAlltasks: React.Dispatch<React.SetStateAction<Tasktodo[]>>
}

const TaskList: React.FC<props> = ({alltasks, setAlltasks}) => {
  return (
    <div className="tasks">{
        alltasks?.map((tasktodo, index)=>(
            <IndividualTask 
            index={index}
            alltasks={alltasks}
            tasktodo={tasktodo} 
            key={tasktodo.id}
            setAlltasks={setAlltasks} />
        ))}
    </div>
  )
};

export default TaskList;