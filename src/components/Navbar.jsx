import React from 'react'
import Logo from "../assets/logomark.png";
import { Grid2x2, List, Menu, Search } from 'lucide-react';
import IconWrapper from './Icon';
import ModeToggler from './ModeToggler';
import { useGlobalContext } from '../context/GlobalContext';

const Navbar = () => {

    const {setTaskLayout,taskLayout,setShowSideBar} = useGlobalContext();

    return (
        <div
            className='p-2 border-b-1 border-primary-50 bg-primary-200 sticky top-0 z-50'
        >
            <div
                className='max-w-7xl w-full mx-auto flex justify-between items-center'
            >
                <div
                    className='flex items-center gap-4'
                >
                    <IconWrapper
                        Icon={Menu}
                        onClick={()=>setShowSideBar(prev=>!prev)}
                    />
                    <div
                        className='flex items-center'
                    >
                        <img
                            src={Logo}
                            alt="Logo"
                        />
                        <span
                            className='text-primary-900 font-bold text-2xl'
                        >DoIt</span>
                    </div>
                </div>
                <div
                    className='flex items-center gap-4 text-primary-500'
                >
                    <IconWrapper
                        Icon={Search}
                    />
                    <IconWrapper
                        Icon={taskLayout === "list" ? Grid2x2 : List}
                        onClick={()=>setTaskLayout(prev=>prev==="list"?"card":"list")}
                    />
                    <ModeToggler/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
