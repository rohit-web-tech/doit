import { ClipboardIcon, ClipboardList, Plus, Star } from 'lucide-react'
import React, { useState } from 'react'
import DoughnutChart from './Doughnut'
import { useGlobalContext } from '../context/GlobalContext'

const CardWrapper = ({ children, className = "py-6" }) => (
    <div
        className={`w-full bg-primary-200 ${className}`}
    >
        {children}
    </div>
)

const NavTab = ({ Icon, label = "Home" }) => {

    const {currentPage,setCurrentPage} = useGlobalContext();
    const isActive = currentPage === label ? true : false ;

    return (
        <div
            onClick={()=>{
                setCurrentPage(label);
            }}
            className={`flex items-center gap-2.5 py-2 px-4 rounded-lg hover:cursor-pointer ${isActive ? "bg-primary-150" : "hover:bg-primary-50"}`}
        >
            <Icon
                className={`h-6 w-6 ${isActive ? "text-primary-800" : "text-primary-500"}`}
            />
            <span
                className={`text-[15px] font-semibold text-primary-500 ${isActive ? "text-primary-800" : "text-primary-500"}`}
            >
                {label}
            </span>
        </div>
    )
}

const SideBar = () => {

    const [showLogout, setShowLogout] = useState(false);
    const {setIsFocused,showSideBar} = useGlobalContext();

    return showSideBar ? (
        <div
            className='sidebar w-[280px] h-[calc(100vh-50px)] relative bg-primary-200 overflow-y-auto'
        >
            <div
                className='bg-primary-100 mt-20 flex flex-col gap-3 items-center px-4 relative pb-6 w-full'
            >
                <div
                    className='w-full relative flex flex-col items-center'
                >
                    <img
                        className='rounded-full -translate-y-1/2 -mb-14 h-[118px] w-[118px] hover:cursor-pointer'
                        src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
                        alt="Profile Pic"
                        onClick={() => setShowLogout(prev => !prev)}
                    />
                    {
                        showLogout && (
                            <CardWrapper
                                className='w-full bg-primary-200 py-2 text-center hover:cursor-pointer hover:bg-red-500 transition absolute -bottom-10'
                            >
                                <span className='text-center text-xl font-semibold text-primary-500'>Logout</span>
                            </CardWrapper>
                        )
                    }
                </div>
                <span
                    className='text-[15px] font-semibold text-primary-500'
                >
                    Hey, User
                </span>
                <CardWrapper
                    className='flex flex-col gap-2 py-6'
                >
                    <NavTab
                        Icon={ClipboardList}
                        label='All Tasks'
                    />
                    <NavTab
                        Icon={ClipboardIcon}
                        label="Today's Tasks"
                    />
                    <NavTab
                        Icon={Star}
                        label="Important Tasks"
                    />
                </CardWrapper>
                <CardWrapper>
                    <div
                        onClick={()=>setIsFocused(true)}
                        className="flex items-center gap-2.5 py-2 px-4 rounded-lg hover:bg-primary-50 hover:cursor-pointer"
                    >
                        <Plus
                            className={`h-6 w-6 text-primary-500`}
                        />
                        <span
                            className={`text-[15px] font-semibold text-primary-500`}
                        >
                            Add New Task
                        </span>
                    </div>
                </CardWrapper>
                <CardWrapper>
                    <div
                        className='pb-3 px-4 border-b-1 border-primary-50'
                    >
                        <div
                            className='text-primary-500 text-[13.3px] font-semibold'
                        >
                            Today's Task
                        </div>
                        <div
                            className='text-xl font-semibold text-[21.27px] text-primary-500'
                        >
                            11
                        </div>
                    </div>
                    <div className='mt-3'>
                        <DoughnutChart />
                    </div>
                </CardWrapper>
            </div>
        </div>
    ) : null ;
}

export default SideBar
