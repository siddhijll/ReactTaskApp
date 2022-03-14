import React, { useRef } from 'react'
import "./styles.css";

interface props{
    tasktodo: string;
    setTasktodo: React.Dispatch<React.SetStateAction<string>>;
    addTasks:(e: React.FormEvent)=> void;
}

const InputField:React.FC<props> = ({tasktodo, setTasktodo, addTasks}:props) => {
    const inputRef = useRef<HTMLInputElement>(null);

  return( 
  <form className= "input" 
  onSubmit={(e)=>{
      addTasks(e); 
      inputRef.current?.blur();
    }}>
        <input 
        type="text"
        placeholder="Enter Your Task"  
        value={tasktodo} 
        ref = {inputRef}
        onChange={(e)=>setTasktodo(e.target.value)} 
        className="input-box"
        />
        <button className="submit-button" type="submit">
            GO
        </button>
  </form>
  );
};

export default InputField;