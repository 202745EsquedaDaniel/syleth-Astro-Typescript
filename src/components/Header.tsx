import React from 'react';
import Navbar from './NavBar.tsx';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Navbar />
    )
};

export default Header;