import React, { useEffect, useMemo } from 'react'
import { Task } from './TaskList'
import { Delete, Edit, X } from 'lucide-react'
import IconWrapper from './Icon'
import { useGlobalContext } from '../context/GlobalContext'
import { useSelector } from 'react-redux'
import { priorityOptions } from '../const'

const Tab = ({title,value}) => (
    <div
        className={`border-b-1 px-2 border-primary-150 py-2 flex justify-between cursor-pointer w-full text-sm font-medium text-primary-500`}
    >
        <span>{title} : </span>
        <span>{value}</span>
    </div>
)

const TaskDetails = () => {

    let {openDetails,setOpenDetails} = useGlobalContext();
    const todos = useSelector(state=>state?.todos);
    const todo = useMemo(() => todos?.find(todo=>todo?.id === openDetails?.id), [todos]);

    const handleClose = () => {
        setOpenDetails({id:null,status:false});
    }

    useEffect(()=>{
        if(!todo){
            handleClose()
        }
    },[todo])

    return (
        <div
            className={`relative w-[280px] bg-primary-100 h-[calc(100vh-50px)] overflow-y-auto`}
        >
            <div
                className='px-1 border-b-2 border-primary-50 mb-2 text-[13px] font-bold text-primary-70 flex justify-between items-center'
            >
                <span>Task Details</span>
                <IconWrapper
                    Icon={X}
                    onClick={handleClose}
                    className='h-4 w-4'
                />
            </div>
            <Task 
                todo={todo}
            />
            <Tab
                title="Scheduled for"
                value="19/10/2025"
            />
            <Tab
                title="Task priority"
                value={todo?.priority==="high" ? "🔥 High" : todo?.prority === "medium" ? "👀 Medium" : "🙂‍↔️ Low"}
            />
            <Tab
                title="Task Type"
                value={todo?.type==="indoor" ? "🏠 Indoor" : todo?.prority === "outdoor" ? "🛣️ Outdoor" : "😊 General"}
            />
            <div
                className='border-t-1 border-primary-150 fixed w-full bottom-0 flex items-center'
            >
                <IconWrapper
                    Icon={Delete}
                />
                <IconWrapper
                    Icon={Edit}
                    className='h-5 w-5'
                />
            </div>
        </div>
    );
}

export default TaskDetails
