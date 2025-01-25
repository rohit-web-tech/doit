import React, { useEffect, useMemo, useState } from 'react'
import TaskInput from './TaskInput'
import { Delete, Star, StarOffIcon } from 'lucide-react'
import IconWrapper from './Icon'
import { useGlobalContext } from '../context/GlobalContext'
import CheckBox from './CheckBox'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleImportant, toggleTodo } from '../store/todos/todosActions'

export const Task = ({ className = "", todo, onCheck = () => { }, onClick = () => { }, isActive = false }) => {

  const dispatch = useDispatch();

  return (
    <div
      className={`border-b-1 px-2 border-primary-150 py-2 flex justify-between cursor-pointer w-full ${isActive ? "bg-primary-50" : ""} ${className}`}
      onClick={onClick}
    >
      <CheckBox
        label={todo?.title}
        checked={todo?.completed}
        onChange={() => dispatch(toggleTodo(todo?.id))}
      />
      <div
        className='flex items-center gap-1'
      >
        <IconWrapper
          className='w-5 h-5'
          Icon={Delete}
          onClick={() => dispatch(deleteTodo(todo?.id))}
        />
        <IconWrapper
          className='w-5 h-5'
          Icon={todo?.important ? Star : StarOffIcon}
          onClick={() => dispatch(toggleImportant(todo?.id))}
        />
      </div>
    </div>
  )
}

export const TaskCard = ({ todo, onClick = () => { }, isActive = false }) => (
  <div
    className={`border-1 border-primary-150 inline-flex ${isActive ? "bg-primary-50" : ""} `}
    onClick={onClick}
  >
    <Task
      todo={todo}
      onClick={onClick}
      className="my-8 border-none"
    />
  </div>
)

const TasksList = () => {

  const { taskLayout, currentPage, setOpenDetails, openDetails } = useGlobalContext();
  const allTodos = useSelector(state => state.todos);
  const [todos, setTodos] = useState([]);

  // memorizing the grouping of completed and pending todos so that the grouping will again happen only if todos are updated 
  // and not for any other state change
  let { completed, pending } = useMemo(() => {
    // using reduce method on todos array to group the todos as per their status (i.e. either pending or completed) 
    return todos?.reduce((groupedTodos, todo) => {
      if (todo?.completed) {
        groupedTodos.completed.push(todo);
      } else {
        groupedTodos.pending.push(todo);
      }
      return groupedTodos;
    }, { completed: [], pending: [] });
  }, [todos]);

  // according to the filters of side bar such as All, Today's and Important Tasks updating the todo state to show appropriate result
  useEffect(() => {
    if (currentPage === "Important Tasks") {
      setTodos(allTodos?.filter(todo => todo?.important));
    } else {
      setTodos(allTodos);
    }
  }, [currentPage, allTodos]);


  const handleOpenDetails = (id) => {
    setOpenDetails({ id, status: true })
  }

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
            {
              pending?.map(todo => (
                <Task
                  todo={todo}
                  key={todo?.id}
                  onClick={() => handleOpenDetails(todo?.id)}
                  isActive={todo?.id === openDetails?.id}
                />
              ))
            }
          </div>
        ) : (
          <div
            className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-3'
          >
            {
              pending?.map(todo => (
                <TaskCard
                  todo={todo}
                  key={todo?.id}
                  onClick={() => handleOpenDetails(todo?.id)}
                  isActive={todo?.id === openDetails?.id}
                />
              ))
            }
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
        {
          completed?.map(todo => (
            <Task
              todo={todo}
              key={todo?.id}
              onClick={() => handleOpenDetails(todo?.id)}
              isActive={todo?.id === openDetails?.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default TasksList;