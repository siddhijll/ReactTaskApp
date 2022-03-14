import React, {useState, useEffect, useRef} from 'react';
import { Tasktodo } from '../properties';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
import TaskList from './TaskList';

const IndividualTask: React.FC<{
    index: number;
    tasktodo: Tasktodo;
    alltasks: Array<Tasktodo>;
    setAlltasks: React.Dispatch<React.SetStateAction<Tasktodo[]>>;
}>=({
        index, tasktodo, alltasks, setAlltasks
    }) => {

const [edit, setEdit] = useState<boolean>(false);
const [editTask, setEditTask] = useState<string>(tasktodo.tasktodo);

const handleComplete = (id:number) =>{
    setAlltasks(alltasks.map((tasktodo)=>
    tasktodo.id===id?{...tasktodo, isComplete:!tasktodo.isComplete}: tasktodo));
};

const handleDelete=(id: number)=>{
    setAlltasks(alltasks.filter((tasktodo)=>tasktodo.id!==id));
};

const handleEdit=(e:React.FormEvent, id:number)=>{
    e.preventDefault();
    setAlltasks(alltasks.map((tasktodo)=>tasktodo.id===id?{...tasktodo,tasktodo:editTask}:tasktodo));
    setEdit(false);
};

const inputRef = useRef<HTMLInputElement>(null)

useEffect(() => {
    inputRef.current?.focus();
}, [edit])

  return (
    <form className='individual-task' onSubmit={(e)=>handleEdit(e,tasktodo.id)}>
        {
            edit?(
                <input 
                ref = {inputRef}
                value={editTask}
                onChange={(e)=>setEditTask(e.target.value)} 
                className="individual-task--text"/>
            ):(
                tasktodo.isComplete?(
                    <s className="individual-task--text">
                    {tasktodo.tasktodo}
                </s>):(
                    <span className="individual-task--text">
                    {tasktodo.tasktodo}
                </span>
                )
            )
        }  
        <div>
            <span className='icon' onClick={()=>{
                if(!edit && !tasktodo.isComplete){
                    setEdit(!edit);
                }}}
                >
                <AiFillEdit/>
            </span>
            <span className='icon' onClick={()=>handleDelete(tasktodo.id)}>
                <AiFillDelete/>
            </span>
            <span className='icon' onClick={()=>handleComplete(tasktodo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  );
};
export default IndividualTask;