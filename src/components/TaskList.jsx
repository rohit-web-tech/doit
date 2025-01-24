import React, { useState } from 'react'
import TaskInput from './TaskInput'
import { Star } from 'lucide-react'
import IconWrapper from './Icon'
import { useGlobalContext } from '../context/GlobalContext'
import CheckBox from './CheckBox'

export const Task = ({ className = "" }) => {

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div
      className={`border-b-1 px-2 border-primary-150 py-2 flex justify-between cursor-pointer w-full ${className}`}
    >
      <CheckBox
        label={"Task"}
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <IconWrapper
        className='w-5 h-5'
        Icon={Star}
      />
    </div>
  )
}

export const TaskCard = () => (
  <div
    className='border-1 border-primary-150 inline-flex'
  >
    <Task
      className="my-8 border-none"
    />
  </div>
)

const TasksList = () => {

  const { taskLayout } = useGlobalContext();

  return (
    <div
      className='w-full relative flex-grow flex-1 h-[calc(100vh-50px)] overflow-y-auto'
    >

      {/* Upper ToDo bar  */}
      <div
        className='py-1 border-b-2 border-primary-50 mb-2 text-[13px] font-bold text-primary-70'
      >
        To Do
      </div>

      {/* TaskInput Componet  */}
      <div
        className='w-full px-1 relative'
      >
        <TaskInput />
      </div>

      {/* Pending Tasks List */}

      {
        taskLayout === "list" ? (
          <div
            className='mt-2'
          >
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        ) : (
          <div
            className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-3'
          >
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        )
      }

      {/* Completed Tasks List */}
      <div
        className='my-4 font-semibold text-[15px] border-b-1 border-primary-150 text-primary-500'
      >
        Completed Tasks
      </div>
      <div
        className='mt-2'
      >
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default TasksList