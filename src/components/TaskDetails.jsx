import React from 'react'
import { Task } from './TaskList'
import { Delete, Edit, X } from 'lucide-react'
import IconWrapper from './Icon'

const Tab = ({title,value}) => (
    <div
        className={`border-b-1 px-2 border-primary-150 py-2 flex justify-between cursor-pointer w-full text-sm font-medium text-primary-500`}
    >
        <span>{title} : </span>
        <span>{value}</span>
    </div>
)
const TaskDetails = () => {
    return (
        <div
            className='relative w-[280px] bg-primary-100 h-[calc(100vh-50px)] overflow-y-auto'
        >
            <div
                className='px-1 border-b-2 border-primary-50 mb-2 text-[13px] font-bold text-primary-70 flex justify-between items-center'
            >
                <span>Task Details</span>
                <IconWrapper
                    Icon={X}
                    className='h-4 w-4'
                />
            </div>
            <Task />
            <Tab
                title="Scheduled for"
                value="19/10/2025"
            />
            <Tab
                title="Task priority"
                value="🔥 High"
            />
            <Tab
                title="Task behaviour"
                value="🛣️ Outdoor"
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
    )
}

export default TaskDetails
