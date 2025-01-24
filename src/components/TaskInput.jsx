import React, { useRef, useState } from 'react'
import IconWrapper from './Icon';
import { Calendar, Star } from 'lucide-react';
import SelectInput from './SelectInput';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/todosActions';

const priorityOptions = [
  {
    value: "",
    label: "Select Priority"
  },
  {
    value: "high",
    label: "🔥 High"
  },
  {
    value: "medium",
    label: "👀 Medium"
  },
  {
    value: "low",
    label: "🙂‍↔️ Low"
  }
]

const behaviourOptions = [
  {
    value: "",
    label: "Select Behaviour"
  },
  {
    value: "general",
    label: "😊 General"
  },
  {
    value: "indoor",
    label: "🏠 Indoor"
  },
  {
    value: "outdoor",
    label: "🛣️ Outdoor"
  }
]

const TaskInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title : "",
    important : false,
    date : "" ,
    behaviour : "" ,
    priority : ""
  });

  // Add a new todo
  const handleAddTodo = () => {
    if (!todo.title.trim() || !todo?.behaviour || !todo?.priority || !todo?.date){
      return alert("Please fill all the fields");
    };
    dispatch(
      addTodo({
        ...todo,
        id: Date.now(),
        completed: false
      })
    );
    setTodo({
      title : "",
      important : false,
      date : "" ,
      behaviour : "" ,
      priority : ""
    });
  };

  return (
    <div
      className={`h-[178px] w-full bg-primary-150 px-4 flex flex-col justify-center items-center py-2 ${isFocused ? "outline-1 outline-primary-900" : ""}`}
    >
      <div
        className='h-full w-full cursor-text flex items-center'
        onClick={() => inputRef.current.focus()}
      >
        <input
          type="text"
          value={todo?.title}
          placeholder='Add A Task'
          ref={inputRef}
          className='text-[15px] placeholder:text-primary-70 font-medium w-full outline-none text-primary-500'
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          onChange={(e) => {
            setTodo({ ...todo, title: e.target.value })
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
            Icon={Star}
          />
          <IconWrapper
            Icon={Calendar}
          />
          <SelectInput
            value=""
            onSelect={() => { }}
            options={priorityOptions}
          />
          <SelectInput
            value=""
            onSelect={() => { }}
            options={behaviourOptions}
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
