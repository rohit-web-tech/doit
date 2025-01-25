import React, { useEffect, useRef, useState } from 'react'
import IconWrapper from './Icon';
import { Calendar, Star, StarOff} from 'lucide-react';
import SelectInput from './SelectInput';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/todosActions';
import {todoTypeOptions,priorityOptions} from "../const/index.js";
import { useGlobalContext } from '../context/GlobalContext.jsx';

const TaskInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(null);
  const {isFocused,setIsFocused} = useGlobalContext();

  const handleAddTodo = () => {
    if (!todo.title.trim() || !todo?.type || !todo?.priority) {
      return alert("Please fill all the fields");
    };
    dispatch(
      addTodo({
        ...todo,
        id: Date.now(),
        completed: false
      })
    );
    setTodo(null);
  };

  const handleInputChange = (e) => {
    setTodo({...todo,[e.target.name]:e.target.value});
  }

  useEffect(()=>{
    if(isFocused){
      inputRef?.current?.focus();
    }
  },[isFocused])

  return (
    <div
      className={`h-[178px] w-full bg-primary-150 px-4 flex flex-col justify-center items-center py-2 ${isFocused ? "outline-1 outline-primary-900" : ""}`}
    >
      <div
        className='h-full w-full cursor-text flex items-center'
        onClick={()=>setIsFocused(true)}
      >
        <input
          type="text"
          value={todo?.title}
          placeholder='Add A Task'
          ref={inputRef}
          name="title"
          className='text-[15px] placeholder:text-primary-70 font-medium w-full outline-none text-primary-500'
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          onChange={handleInputChange}
          onKeyDown={(e)=> {
            e.key === "Enter" && handleAddTodo()
          }}
          required
        />
      </div>
      <div
        className='h-[68px] w-full flex justify-between items-center'
      >
        <div
          className='flex items-center gap-2'
        >
          <IconWrapper
            onClick={() => setTodo({ ...todo, important: !todo?.important })}
            Icon={todo?.important ? Star : StarOff}
          />
          <IconWrapper
            Icon={Calendar}
          />
          <SelectInput
            value={todo?.priority}
            onSelect={handleInputChange}
            options={priorityOptions}
            name="priority"
          />
          <SelectInput
            value={todo?.type}
            onSelect={handleInputChange}
            options={todoTypeOptions}
            name="type"
          />
        </div>
        <button
          onClick={handleAddTodo}
          className='py-2 px-4 text-[15px] text-white bg-primary-900 rounded-lg cursor-pointer hover:bg-[#98E19B] transition hover:text-black'
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskInput
