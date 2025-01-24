import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import IconWrapper from './Icon';
import { Moon, Sun } from 'lucide-react';

const ModeToggler = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <IconWrapper
            Icon={theme === "dark" ? Sun : Moon}
            onClick={toggleTheme}
        />
    )

}

export default ModeToggler
